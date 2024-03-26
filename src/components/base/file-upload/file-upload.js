import React, {useRef, useState} from 'react'
import {BaseLabel} from '../base-label'
import {
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  ImagePreview,
  PreviewContainer
} from './styles'
import Unknown from 'assets/img/unknown.png'

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 2000000

const convertNestedObjectToArray = nestedObj =>
  Object.keys(nestedObj).map(key => nestedObj[key])

export default ({
  label,
  isRequired,
  updateFilesCb = () => {},
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  input: {value: omitValue, onChange, onBlur},
  meta: omitMeta,
  ...props
}) => {
  const fileInputField = useRef(null)
  const [files, setFiles] = useState({})
  const [uploadedFiles, setUploadedFiles] = useState([])

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
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles)
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
  let buttonContent = !Object.keys(files).length ? (
    <>{image}</>
  ) : (
    Object.keys(files).map((fileName, index) => {
      let file = files[fileName]
      const fileType = file.type.split('/')[0]
      let isImageFile = fileType === 'image'
      return (
        <PreviewContainer key={fileName}>
          <div>
            {isImageFile ? (
              <ImagePreview
                src={URL.createObjectURL(file)}
                alt={`file preview ${index}`}
              />
            ) : (
              <ImagePreview src={Unknown} />
            )}
          </div>
        </PreviewContainer>
      )
    })
  )

  return (
    <>
      <BaseLabel label={label} isRequired={isRequired} />
      <FileUploadContainer>
        <DragDropText>Drag and drop your files anywhere or</DragDropText>
        <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
          {buttonContent}
        </UploadFileBtn>
        <FormField
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload(onChange)}
          onBlur={handleNewFileUpload(onBlur)}
          accept=".jpg, .png, .jpeg"
          {...props.input}
          {...props}
        />
      </FileUploadContainer>
    </>
  )
}
