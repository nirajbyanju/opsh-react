import { FC } from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import './CkEditors.scss'

interface CkEditorsProps {
  
}

const CkEditors: FC<CkEditorsProps> = ({}) => {
  return <div>
    <CKEditor
          editor={ClassicEditor}
          config={{
            toolbar: [
              'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote',
              'undo', 'redo', '|', 'imageUpload', 'mediaEmbed', 'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells'
            ]
          }}
          data="<p>Enter vacancy description here...</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
        />
  </div>
}

export default CkEditors