import React from "react";
import { FaTags } from "react-icons/fa";
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";
import moment from "moment";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onPinNote,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="relative border rounded-lg p-5 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h6 className="text-xl font-bold text-gray-900">{title}</h6>
          <span className="text-sm text-gray-600">
            {moment(date).format("Do MMM YYYY")}
          </span>
        </div>

        <MdOutlinePushPin
          className={`text-3xl cursor-pointer transition-colors duration-300 ${
            isPinned ? "text-blue-600" : "text-gray-400"
          }`}
          onClick={onPinNote}
        />
      </div>

      <p className="text-gray-800 mb-4">{content?.slice(0, 100)}</p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
          {tags.map((item, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 rounded-full px-3 py-1"
            >
              #{item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <MdCreate
            className="text-2xl cursor-pointer text-green-600 transition-transform duration-300 hover:scale-110"
            onClick={onEdit}
          />

          <MdDelete
            className="text-2xl cursor-pointer text-red-600 transition-transform duration-300 hover:scale-110"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
