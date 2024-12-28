"use client";
import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment(""); // Clear input field
      alert(`Thanks for your Comment !.${""}
        "${newComment}".`);
    }
  };

  const clearComments = () => {
    setComments([]);
    setNewComment("");
    alert("Your All Comments Will Deleted !");
  };

  return (
    <div className="border-t-2 mt-10 border-gray-400 w-[95%] mx-auto h-fit flex justify-center items-center">
      <div
        className="mt-6 border-gray-600 pt-5 mb-4 flex flex-col justify-center
    items-center bg-gray-300 w-[40%] rounded-lg py-8 "
      >
        <div className="">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-[sans-serif] font-bold mb-4">
            Comments Section
          </h3>
        </div>

        {/* Add Comment Form */}
        <div className="mt-5 flex items-center w-full text-center mb-6">
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-[60%] mx-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out"
          />
        </div>

        <div className="mt-2">
          <button
            onClick={handleAddComment}
            className="ml-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md
          hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
          transition duration-200 ease-in-out"
            title="Add A New Comment !"
          >
            Add Comment
          </button>
          <button
            onClick={clearComments}
            className="ml-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md
          hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
          transition duration-200 ease-in-out"
            title="This Will Delete All Comments !"
          >
            Delete Comments
          </button>
        </div>

        {/* Display Comments */}
        <div className="">
          <ul>
            {comments.map((comment, index) => (
              <li
                key={index}
                className="mt-2 p-3 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-200 ease-in-out"
              >
                <p>
                  <span className="font-mono text-xl">Your Comment:</span>
                  {comment}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comments;
