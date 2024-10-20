import { FC } from "react";
import Select from "@/components/select/select";
import { position } from "@/data/position";
import { useState } from "react";

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const CertificationModal: FC<CertificationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [selectedTeamSize, setSelectedTeamSize] = useState<string>("");
  console.log(selectedTeamSize);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading] = useState(false);
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = {
      boardName: form.boardName.value,
      level: form.level.value,
      faculty: form.faculty.value,
      joinedYear: form.joinedYear.value,
      passedYear: form.passedYear.value,
      gpa: form.gpa.value,
    };

    onSubmit(formData);
    onClose(); // Close modal after submit
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const fileInput = document.getElementById("image-upload");
    if (fileInput) {
      fileInput.click();
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl p-6 rounded-lg max-h-[90vh] overflow-y-auto overflow-auto custom-scrollbar">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-opsh-black">
            Add Certificate Data
          </h4>
          <button
            onClick={onClose}
            className="bg-opsh-danger font-medium text-white text-sm py-1 px-3 rounded-md border-2 border-white hover:bg-white hover:text-opsh-danger hover:border-opsh-danger"
          >
            Close (x)
          </button>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm text-opsh-primary font-medium">
                Attachment Document
              </label>

              <div className="flex  flex-row gap-3">
                <label
                  htmlFor="image-upload"
                  className="block w-full text-sm text-gray-500 py-2 px-4 border rounded-lg cursor-pointer bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {selectedFile ? selectedFile.name : "Select Attachment"}
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                <button
                  onClick={handleUpload}
                  className="
      bg-blue-700 hover:bg-blue-800
      text-white py-2 px-4 rounded-lg flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2
    "
                  type="button"
                >
                  <span>{isUploading ? "Uploading..." : "Upload"}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-y-2">
            <div className="grid grid-cols-1 gap-y-2 gap-x-3 sm:grid-cols-1 md:grid-cols-3">
              <div className="col-span-1 sm:col-span-2 md:col-span-1">
                <label
                  htmlFor="certificateName"
                  className="block text-sm mb-1 text-opsh-primary font-medium"
                >
                  Certificate Name
                </label>
                <input
                  type="text"
                  id="certificateName"
                  name="certificateName"
                  className="w-full border-opsh-grey rounded px-3 py-[0.375rem] border focus:outline-none focus:border-opsh-secondary placeholder:text-opsh-muted/50 placeholder:text-sm"
                  placeholder="Enter Certificate Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="joinedYearDate"
                  className="block text-sm mb-1 text-opsh-primary font-medium"
                >
                  Achievement Date
                </label>
                <input
                  type="date"
                  id="joinedYearDate"
                  name="joinedYear"
                  className="w-full border-opsh-grey rounded px-3 py-[0.375rem] border focus:outline-none focus:border-opsh-secondary placeholder:text-opsh-muted/50 placeholder:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="gradingSystem"
                  className="block text-sm mb-1 text-opsh-primary font-medium"
                >
                  Category
                </label>
                <Select
              name="teamSize"
              onChange={setSelectedTeamSize}
              data={position}
            />
              </div>
              <div className="col-span-3">
                <label htmlFor="">Description</label>
                {/* <CkEditors /> */}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-end gap-2 mt-4">
            <button
              onClick={onClose}
              type="button"
              className="px-3 py-2 text-sm font-medium bg-opsh-danger text-white rounded hover:bg-red-700 w-full sm:w-auto"
            >
              Cancel & Close
            </button>
            <button
              type="submit"
              className="px-3 py-2 text-sm font-medium gap-1 bg-opsh-success text-white rounded hover:bg-green-700 w-full sm:w-auto"
            >
              Add & Create New
            </button>
            <button
              type="submit"
              className="px-3 py-2 text-sm font-medium gap-1 bg-opsh-success text-white rounded hover:bg-green-700 w-full sm:w-auto"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CertificationModal;
