import styled from 'styled-components'

export const FileUploadContainer = styled.section`
  position: relative;
  margin: 10px 0 15px;
  border: 2px dotted lightgray;
  padding: 35px 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormField = styled.input`
  font-size: 18px;
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:focus {
    outline: none;
  }
`

export const InputLabel = styled.label`
  top: -21px;
  font-size: 13px;
  color: black;
  left: 0;
  position: absolute;
`

export const DragDropText = styled.p`
  font-weight: bold;
  letter-spacing: 2.2px;
  margin-top: 0;
  text-align: center;
`

export const UploadFileBtn = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #3498db;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  padding: 1.1em 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 6px;
  color: #3498db;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 250ms ease-in-out;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  display: flex;
  align-items: center;
  padding-right: 0;
  justify-content: center;
  @media only screen and (max-width: 500px) {
    width: 70%;
  }
  @media only screen and (max-width: 350px) {
    width: 100%;
  }
  &:hover {
    background: #f1f1f1;
  }
  &:focus {
    outline: 0;
    background: transparent;
  }
  &:disabled {
    opacity: 0.4;
    filter: grayscale(100%);
    pointer-events: none;
  }
`

export const FilePreviewContainer = styled.article`
  margin-bottom: 35px;
  span {
    font-size: 14px;
  }
`

export const PreviewList = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`

export const FileMetaData = styled.div`
  display: ${props => (props.isImageFile ? 'none' : 'flex')};
  flex-direction: column;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  background-color: rgba(5, 5, 5, 0.55);
`

export const RemoveFileIcon = styled.i`
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`

export const PreviewContainer = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-sizing: border-box;
  &:hover {
    opacity: 0.55;
    ${FileMetaData} {
      display: flex;
    }
  }
  & > div:first-of-type {
    height: 100%;
    position: relative;
  }
  @media only screen and (max-width: 750px) {
    width: 25%;
  }
  @media only screen and (max-width: 500px) {
    width: 50%;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`

export const ImagePreview = styled.img`
  border-radius: 6px;
  width: 130px;
`
