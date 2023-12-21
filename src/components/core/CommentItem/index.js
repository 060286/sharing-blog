import React from "react";

const CommentItem = ({ comment }) => {
  return (
    <div className="flex mt-2">
      <img src={comment.src} alt="" className="w-10 h-10 rounded-full mr-5" />
      <div className="w-full h-auto  bg-slate-800 pl-3 rounded-lg">
        <div className="text-base mt-2 text-gray-100 hover:text-blue-600 hover:cursor-pointer">
          {comment.name}
        </div>
        <p className="text-sm text-slate-400">{comment.description}</p>
        <p className="mb-2 text-base text-gray-200">{comment.text}</p>
      </div>
    </div>
  );
};

export default CommentItem;
