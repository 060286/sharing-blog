import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import PulseLoader from "react-spinners/PulseLoader";
import FadeIn from "react-fade-in/lib/FadeIn";
import { Tooltip } from "react-tooltip";

import netCoreImg from "../../assets/dot_net_image.png";
import reactJsImg from "../../assets/react.js-img.png";
import meme from "../../assets/meme.jpeg";
import { AiOutlineMail } from "react-icons/ai";

import "./style.css";
import "react-tooltip/dist/react-tooltip.css";
import Dialog from "../../components/core/Dialog";

function About() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsVisible(true);
    }, 1500);
  }, []);

  return (
    <div className="container h-screen mx-auto mt-5 flex flex-row justify-between">
      {loading ? (
        <div className="flex justify-center mt-5 basis-7/12">
          <PulseLoader color="#36d6b0" />
        </div>
      ) : (
        <div className="container-info basis-7/12 p-7 flex flex-col">
          <FadeIn transitionDuration={1500}>
            <p className="text-slate-100 font-sans text-6xl font-bold ">
              Hi Everyone! I'm Tam
            </p>
            <p className=" mt-5 text-2xl font-bold text-cyan-400">
              <Typewriter
                options={{
                  strings: ["Just a person with a passion for programming."],
                  loop: true,
                  autoStart: true,
                  delay: 50,
                }}
              />
            </p>

            <div className="w-full flex gap-6 justify-center mt-4">
              <img
                className="w-48 h-48 mt-2.5"
                src={netCoreImg}
                alt="dot_net_core_image"
              />
              <img
                src={reactJsImg}
                alt="react_js_image"
                className="w-54 h-48 mt-2.5"
              />
            </div>
            <p className="text-slate-100 mt-2.5 text-lg font-bold">
              Backend: C#, .NET, ASP.NET Core, SQL, CosmosDB, Entity Framework
              Core, DI, Hangfire, XUnit, NUnit, SignalR, etc
            </p>
            <p className="text-slate-100 mt-2.5 text-lg font-bold">
              Cloud Service: Azure Cloud Services, Azure Cosmos DB, Azure Blob
              Storage, Sonar Cloud.
            </p>
            <p className="text-slate-100 mt-2.5 text-lg font-bold">
              Frontend: Html, Css, ReactJs, Redux tool kit.
            </p>
            <p className="text-slate-100 mt-2.5 text-xl font-bold">Contacts</p>
            <ul>
              <li>
                <span className="text-slate-100 text-lg font-bold">
                  Email:{" "}
                </span>
                <span className="text-slate-100 text-lg font-bold">
                  tamle.dev@gmail.com{" "}
                  <AiOutlineMail
                    onClick={handleOpenDialog}
                    className="inline cursor-pointer"
                    id="hire-me-icon"
                  />
                  <Tooltip
                    anchorSelect="#hire-me-icon"
                    content="Hire me!"
                    key={"bottom"}
                    place={"bottom"}
                  ></Tooltip>
                  {isOpen && (
                    <Dialog onCloseDialog={handleCloseDialog}></Dialog>
                  )}
                </span>
              </li>
              <li className="text-slate-100 text-lg font-bold">
                Linkedin:{" "}
                <span>
                  <a href="https://www.linkedin.com/in/le-tam-3732831b6/">
                    Visit <span className="text-cyan-400">Linkedin</span>
                  </a>
                </span>
              </li>
              <li className="text-slate-100 text-lg font-bold">
                Github:{" "}
                <span>
                  <a href="https://github.com/060286">
                    Visit <span className="text-green-500">Github</span>
                  </a>
                </span>
              </li>
            </ul>
          </FadeIn>
        </div>
      )}
      <div className="container-avatar basis-5/12 flex flex-row p-7 justify-center w-full">
        <FadeIn transitionDuration={5000}>
          <div className="w-96">
            <img
              className={`h-fit pt-10 ${
                isVisible ? "opacity-100" : "opacity-0 transition-opacity"
              }`}
              src={meme}
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default About;
