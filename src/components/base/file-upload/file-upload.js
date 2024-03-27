import React, {useRef, useCallback, useState} from 'react'
import {BaseLabel} from '../base-label'
import {HelperText} from '@windmill/react-ui'

import {
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  ImagePreview,
  PreviewContainer
} from './styles'
import Unknown from 'assets/img/unknown.png'
import {CloseIcon, ImageIcon} from 'icons'
import {useDropzone} from 'react-dropzone'

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 2000000

const convertNestedObjectToArray = nestedObj =>
  Object.keys(nestedObj).map(key => nestedObj[key])

export default ({
  label,
  isRequired,
  updateFilesCb = () => {},
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  value: omitValue,
  onChange,
  onBlur,
  meta: omitMeta,
  ...props
}) => {
  const [files, setFiles] = useState({})
  const [preview, setPreview] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState([])
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader()

    file.onload = function () {
      setPreview(file.result)
    }

    file.readAsDataURL(acceptedFiles[0])
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const fileInputField = useRef(null)

  const handleUploadFiles = files => {
    const uploaded = [...uploadedFiles]
    files.some(file => uploaded.push(file))
    return [...uploaded]
  }

  const handleFileEvent = delegate => e => {
    const chosenFiles = Array.prototype.slice.call(e.target.files)
    const up = handleUploadFiles(chosenFiles)
    setUploadedFiles(up)
    delegate(up)
  }
  const handleUploadBtnClick = () => {
    fileInputField.current.click()
  }

  const addNewFiles = newFiles => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!props.multiple) {
          return {file}
        }
        files[file.name] = file
      }
    }
    return {...files}
  }

  const callUpdateFilesCb = files => {
    const filesAsArray = convertNestedObjectToArray(files)
    updateFilesCb(filesAsArray)
  }

  const handleNewFileUpload = delegate => e => {
    delegate(e.target.files[0])
    const {files: newFiles} = e.target
    console.log({newFiles})

    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles)
      console.log({updatedFiles})

      setFiles(updatedFiles)
      if (props.multiple) delegate(e.target.files)
      callUpdateFilesCb(updatedFiles)
    }
  }
  const image = props.previewImage ? (
    <img src={props.previewImage} alt="project files" />
  ) : (
    <div>
      <i className="fas fa-file-upload" />
      <span> Upload {props.multiple ? 'files' : 'a file'}</span>
    </div>
  )
  let buttonContent = !preview ? null : (
    <PreviewContainer>
      <div className="w-full items-center justify-center">
        <ImagePreview src={preview} alt={`file preview `} />
      </div>
    </PreviewContainer>
  )

  return (
    <>
      <BaseLabel label={label} isRequired={isRequired} />
      <FileUploadContainer {...getRootProps()}>
        {preview.length ? (
          <>
            {buttonContent}
            <button
              className="absolute w-6 h-6 top-0 -mt-3 right-0 -mr-3"
              onClick={e => {
                e.preventDefault()
                setPreview('')
              }}>
              <CloseIcon />
            </button>
          </>
        ) : (
          <>
            <ImageIcon />
            {isDragActive ? (
              <HelperText className="text-sm mt-3">
                Drop the files here ...
              </HelperText>
            ) : (
              <HelperText className="text-sm mt-3">
                Drag and drop an{' '}
                <a>
                  <HelperText class="text-blue-600 text-sm">
                    , Or Browse
                  </HelperText>
                </a>
              </HelperText>
            )}
            <HelperText className="mt-3 text-sm mb-10">
              Max 5 MB each
            </HelperText>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 col-span-5 lg:col-span-4 mt-5">
              <HelperText className="text-sm">• Aspect ratio 16:9</HelperText>
              <HelperText className="text-sm">
                • Recommended size 1024×576
              </HelperText>
            </div>
            {buttonContent}
            <FormField
              type="file"
              ref={fileInputField}
              onChange={handleNewFileUpload(onChange)}
              onBlur={handleNewFileUpload(onBlur)}
              accept=".jpg, .png, .jpeg"
              {...props.input}
              {...props}
              {...getInputProps()}
            />
          </>
        )}
      </FileUploadContainer>
    </>
  )
}
