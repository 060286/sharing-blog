import React, { useEffect, useState } from "react";

import CommentItem from "../CommentItem";

import comments from "../../../dummy/commentData";

const Comments = () => {
  const [userComment, setUserComment] = useState("");
  const [commentArray, setCommentArray] = useState([]);

  const handleComment = (e) => {
    if (e.key === "Enter") {
      const text = e.target.value;

      const comment = {
        id: commentArray.length + 1,
        src: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
        text: text,
        name: "Milan Jovanovic",
        description:
          " I help you become a better .NET software engineer | Microsoft MVP",
      };

      setUserComment("");
      setCommentArray((prevArray) => [comment, ...prevArray]);
    }
  };

  useEffect(() => {
    setCommentArray(comments);
  }, []);

  return (
    <div className="p-5">
      <div className="flex">
        <div className="avatar-block w-10 mr-5">
          <img
            src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG.png"
            alt=""
            srcset=""
            className="rounded-full"
          />
        </div>
        <div className="add-comments-block w-full">
          <textarea
            onKeyDown={(e) => handleComment(e)}
            onChange={(e) => setUserComment(e.target.value)}
            value={userComment}
            placeholder="Add a comment..."
            class="w-full text-base p-4 rounded-md bg-gray-100 border-2 border-gray-300 text-gray-700 textarea placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
      </div>
      <div className="mt-2">
        <button className="text-lg">Most relevant</button>
      </div>
      {commentArray.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default Comments;
