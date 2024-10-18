import { FC } from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import './CkEditors.scss';

interface CkEditorsProps {
  onChange?: (data: string) => void; // Optional onChange prop, since read-only might not need it
  data?: string; // Accept initial data as a prop
  readOnly?: boolean; // Accept a readOnly flag
}

const CkEditors: FC<CkEditorsProps> = ({ onChange, data = '', readOnly = false }) => {

  const handleEditorChange = (_: any, editor: any) => {
    const editorData = editor.getData(); // Get editor data
    if (onChange) {
      onChange(editorData); // Call the onChange prop to pass data to parent if it's provided
    }
  };

  const handleEditorReady = (editor: any) => {
    // Set read-only mode here
    editor.isReadOnly = readOnly;
  };

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: [
            'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote',
            'undo', 'redo', '|', 'imageUpload', 'mediaEmbed', 'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells'
          ]
        }}
        data={data} // Set the initial data prop
        onChange={handleEditorChange} // Handle the onChange event
        onReady={handleEditorReady} // Set the editor to read-only mode after initialization
      />
    </div>
  );
};

export default CkEditors;
