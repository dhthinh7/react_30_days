import * as React from 'react';
import UploadFileComponent from './UploadFileComponent';

export interface IUploadFileProps {
}

export default function UploadFile(props: IUploadFileProps) {
  return <div>
    <h2>Attachment</h2>
    <UploadFileComponent />
  </div>
}
