import React, { useState, FC } from 'react';

interface UploadPhotoProps {
  onUpload: (file: File | null) => void;
}

const UploadPhoto: FC<UploadPhotoProps> = ({ onUpload }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    onUpload(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="flex  w-full">
          {imagePreview ? (
            <div className="relative">
              <img
                src={imagePreview}
                alt="Uploaded Preview"
                className="w-46 h-46 object-cover rounded-lg"
              />
              <button
                onClick={removeImage}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ) : (
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-56 h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-1 pb-2">
                <svg
                  className="w-17 h-7 mb-2 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-xs text-gray-500">
                  <span className="font-semibold ">Click to upload</span> or drag and drop
                </p>
                <p className="text-xxs text-gray-500">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
