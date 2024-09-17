import { FC } from "react";
import UploadPhoto from "../../../components/uploadPhoto/UploadPhoto";
import CkEditors from "../../../components/ckEditors.tsx/CkEditors";

interface InformationProps {}

const Information: FC<InformationProps> = ({}) => {
  return (
    <div className="w-full mx-auto bg-white sm:py-4 sm:px-4 lg:px-4 rounded-lg shadow">
      <form action="">
        <div className="grid grid-cols-1">
          <div className="mt-2">
            <label
              className="block text-gray-700 text-sm mb-2 font-semibold"
              htmlFor="description"
            >
              Photo
            </label>
            <UploadPhoto />
          </div>
          <div className="mt-2">
            <label
              className="block text-gray-700 text-sm mb-2 font-semibold"
              htmlFor="description"
            >
              Description
            </label>
            <CkEditors />
          </div>
        </div>
        <div className="flex justify-end gap-5 mt-4">
          <button
            type="submit"
            className="px-5 py-2 flex items-center gap-1 bg-opsh-success text-white rounded hover:bg-green-700"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Information;
