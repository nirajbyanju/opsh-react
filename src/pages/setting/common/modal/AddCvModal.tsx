import { FC } from "react";
import { useForm } from "react-hook-form";
import Select from "@/components/select/select";
// import CkEditors from "@/components/ckEditors/CkEditors";

interface AddCvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}
// ss
interface Position {
  id?: number;
  name: string;
}
const dummyPositions: Position[] = [
  { id: 1, name: "Manager" },
  { id: 2, name: "Developer" },
  { id: 3, name: "Designer" },
  { id: 1, name: "Manager" },
  { id: 2, name: "Developer" },
  { id: 3, name: "Designer" },
];

const AddCvModal: FC<AddCvModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const { control } = useForm();
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
          <div className="grid gap-y-2">
            <div className="grid grid-cols-1 gap-y-2 gap-x-3 sm:grid-cols-1 md:grid-cols-3">
              <div className="col-span-1 sm:col-span-2 md:col-span-1">
                <label
                  htmlFor="Name"
                  className="block text-sm mb-1 text-opsh-primary font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  className="w-full border-opsh-grey rounded px-3 py-[0.375rem] border focus:outline-none focus:border-opsh-secondary placeholder:text-opsh-muted/50 placeholder:text-sm"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="position"
                  className="block text-sm mb-1 text-opsh-primary font-medium"
                >
                  Position
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
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
                  name="levelPositionId"
                  control={control}
                  options={dummyPositions.map((pos) => ({
                    value: pos.id?.toString() || "",
                    label: pos.name,
                  }))}
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

export default AddCvModal;
