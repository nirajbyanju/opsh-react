import { FC, useState } from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import './CkEditors.scss';

interface CkEditorsProps {
  onChange: (data: string) => void; // Add an onChange prop to pass data to parent
}

const CkEditors: FC<CkEditorsProps> = ({ onChange }) => {
  const [editorData, setEditorData] = useState<string>(''); // Initialize state for editor data

  const handleEditorChange = (_: any, editor: any) => {
    const data = editor.getData(); // Get editor data
    setEditorData(data); // Update state
    onChange(data); // Call the onChange prop to pass data to parent
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
        data={editorData} // Set the data prop
        onChange={handleEditorChange} // Handle the onChange event
      />
    </div>
  );
};

export default CkEditors;
