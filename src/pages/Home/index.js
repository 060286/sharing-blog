import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import PulseLoader from "react-spinners/PulseLoader";

import FadeIn from "react-fade-in/lib/FadeIn";
import posts from "../../dummy/postsData";

import "./style.css";
import { LanguagesContext } from "../../App";
import { ENGLISH } from "../../common/commonConstant";

function Home() {
  const language = useContext(LanguagesContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleNavigationToPostDetail = (id) => {
    navigate(`/post/${id}`);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [language.language]);

  return (
    <div className="container mx-auto mt-10 h-screen w-full flex">
      {loading ? (
        <div className="flex justify-center mt-5 w-full">
          <PulseLoader color="#36d6b0" />
        </div>
      ) : (
        <>
          <div className="basis-4/12 p-4 flex flex-col">
            <FadeIn transitionDuration={3000}>
              <h3 className="text-slate-50 text-3xl mb-2 font-extrabold">
                Posts{" "}
              </h3>
              <hr />
              {posts.map((post) => (
                <div
                  className="container p-3 mt-4 cursor-pointer"
                  key={post.id}
                  onClick={() => handleNavigationToPostDetail(post.id)}
                >
                  <p className="text-slate-50 text-xl hover:text-green-400">
                    {post.title}
                  </p>
                  <p className="text-slate-50 text-sm italic pl-4">
                    {post.createdAt}
                  </p>
                </div>
              ))}
            </FadeIn>
          </div>
          <div className="basis-8/12 bg-slate-600 p-4 text-3xl font-bold text-slate-800">
            <FadeIn transitionDuration={3500}>
              {language.language === ENGLISH ? (
                <p>Hi guys</p>
              ) : (
                <p>Chào bạn!</p>
              )}
            </FadeIn>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
