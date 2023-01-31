import * as React from 'react';
import styled from 'styled-components';
// es
import iconUpload from "../../asset/Upload/iconupload.svg";
import cloudDownload from "../../asset/Upload/clouddownload.svg";

// export interface IUploadFileComponentProps {
// }

export default function UploadFileComponent() {
  let [listFiles, setListFiles] = React.useState([])
  const handleChange = (e) => {
    let newFile = e.target.files
    if (newFile) {
      let listFileTerm = Object.values(newFile).filter(value => {
        if (value.type !== "image/png" && value.type !== "image/jpg" && value.type !== "image/svg+xml" && !listFiles.includes(value.name)) {
          return 1
        }
        return 0
      })

      // Create form data to send file to server
      // let formData = new FormData()
      // formData.append('key', file)

      let listFileNew = Object.values(listFileTerm).map(value => {
        return value.name
      })

      setListFiles([...listFiles, ...listFileNew])
    }
  }

  const removeFile = (file) => {
    const updatedList = [...listFiles];

    setListFiles(updatedList.filter((item) => item !== file))
  }

  const renderDisplayArea = () => {
    return listFiles.map((file, index) => {
      return <div key={index} className="display__area">
        <div className='display__area--text'>{file}</div>
        <div className='display__area--close' onClick={() => removeFile(file)}>x</div>
      </div>
    })
  }

  return <UploadFileWrapper>
    <div className="itemWrapper">
      <div className="item">
        <label className="item__inner" htmlFor="upload">
          <img src={iconUpload} alt="" />
          <input type="file" name="upload" id="upload" multiple onChange={handleChange} value="" />
        </label>
        <div className="item__bottom">
          <div className="downloadIcon">
            <img src={cloudDownload} alt="" />
          </div>
          <div className="text">Attach... (200KB)</div>
        </div>
      </div>
      <div className="showFile">
        {renderDisplayArea()}
      </div>
    </div>
  </UploadFileWrapper>
}

const UploadFileWrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  .itemWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 300px;
    min-width: 300px;
    /* width: 400px; */
    margin: 0 auto;
    .item {
      padding: 15px;
      border-radius: 10px;
      background-color: #F1F6FC;
    .item__inner {
      border: 2px dashed #BABABA;
      padding: 20px 40px;
      border-radius: 10px;
      margin-bottom: 12px;
      display: block;
      text-align: center;
      position: relative;
      &:hover {
        cursor: pointer;
      }

      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        opacity: 0;
      }
    }

    .item__bottom {
      display: flex;
      justify-content: center;
      gap: 8px;
      .downloadIcon, .text {
        color: #1A85FF;
      }
    }
  }
  }

  .showFile {
    margin-top: 10px;
    .display__area {
      display: flex;
      justify-content: space-between;
      margin: 5px 0;
      padding: 10px;
      background-color: lightblue;
      gap: 10px;
      border-radius: 10px;
      .display__area--text {
        color: #1A85FF;
        transition: all .3s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: translate(0, -3px);
          color: blue;
        }
      }

      .display__area--close {
        color: blue;
        font-size: 1.2rem;
        transition: all .3s ease-in-out;
        border-radius: 50%;
        width: 20px;
        min-width: 20px;
        height: 20px;
        background-color: lightpink;
        text-align: center;
        line-height: 16px;
        &:hover {
          transform: scale(1.3);
          cursor: pointer;
          color: black;
          background-color: #1A85FF;
        }
      }
    }
  }
`
