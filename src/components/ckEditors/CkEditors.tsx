import { FC } from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import './CkEditors.scss';

interface CkEditorsProps {
  onChange?: (data: string) => void; // Optional onChange prop
  data?: string; // Accept initial data as a prop
  readOnly?: boolean; // Accept a readOnly flag
}

const CkEditors: FC<CkEditorsProps> = ({ onChange, data = '' }) => { // Add readOnly prop with a default value

  const handleEditorChange = (_: any, editor: any) => {
    const editorData = editor.getData(); // Get editor data
    if (onChange) {
      onChange(editorData); // Call the onChange prop to pass data to parent if it's provided
    }
  };

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: [
            'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote',
            'undo', 'redo', '|', 'imageUpload', 'mediaEmbed', 'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells'
          ],
        }}
        data={data}
        onChange={handleEditorChange} 
      />
    </div>
  );
};

export default CkEditors;
