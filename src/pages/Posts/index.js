import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ContentList from "../../components/core/ContentList";
import PulseLoader from "react-spinners/PulseLoader";
import posts from "../../dummy/postsData";

import { LanguagesContext } from "../../App";

import { ENGLISH } from "../../common/commonConstant";

import "./index.css";
import Comments from "../../components/core/Comments";

function Posts() {
  const lang = useContext(LanguagesContext);
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleNavigationToPostDetail = (id) => {
    navigate(`/post/${id}`);
  };

  useEffect(() => {
    if (id !== null) {
      setCurrentPost(posts.find((item) => item.id === parseInt(id)));
    }
  }, [id, lang]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [id]);

  return (
    <div
      className="container mx-auto mt-10 h-full w-full flex"
      style={{ minHeight: "100vh" }}
    >
      <div className="basis-4/12 p-4 flex flex-col">
        <h3 className="text-slate-50 text-3xl mb-2 font-extrabold">
          {lang.language === ENGLISH ? "Posts" : "Bài viết"}{" "}
        </h3>
        <hr />
        {posts.map((post) => (
          <div
            className="container p-3 mt-4 cursor-pointer"
            key={post.id}
            onClick={() => handleNavigationToPostDetail(post.id)}
          >
            <p className="text-slate-50 text-xl hover:text-green-400">
              {lang.language === ENGLISH ? post.title : post.vnTitle}
            </p>
            <p className="text-slate-50 text-sm italic pl-4">
              {post.createdAt}
            </p>
          </div>
        ))}
      </div>
      <div className="basis-8/12 bg-slate-600 p-4 text-3xl font-bold text-slate-800">
        <div className="post-header text-center">
          {loading ? (
            <></>
          ) : (
            <p className="text-5xl font-bold tracking-wide text-green-400">
              {lang.language === ENGLISH
                ? currentPost?.title
                : currentPost?.vnTitle}
            </p>
          )}
        </div>
        <div className="post-content">
          {loading ? (
            <div className="flex justify-center mt-5">
              <PulseLoader color="#36d6b0" />
            </div>
          ) : (
            <>
              <ContentList post={currentPost} />
              <hr className="mt-3" />
              <Comments />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Posts;
