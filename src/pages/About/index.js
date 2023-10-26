import React, { useState, useEffect } from "react";

import PulseLoader from "react-spinners/PulseLoader";

import FadeIn from "react-fade-in/lib/FadeIn";

import netCoreImg from "../../assets/dot_net_image.png";
import meme from "../../assets/meme.jpeg";

import "./style.css";

function About() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

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
            <p className="text-slate-100 mt-5 text-xl font-medium">
              I am currently employed at{" "}
              <span className="text-cyan-400">
                BOSCH Global Software Technologies
              </span>
              , which is based in
              <span className="text-red-500"> Vietnam</span>, as a{" "}
              <span className="text-cyan-400">.NET developer</span>
            </p>
            <div className="w-full flex justify-center mt-4">
              <img
                className="w-48 h-48 mt-2.5"
                src={netCoreImg}
                alt="dot_net_core_image"
              />
            </div>
            <p className="text-slate-100 mt-4  text-lg font-bold">
              I worked as <span className="text-orange-400">FPT Software</span>{" "}
              for 2.5 years after graduating from HUTECH University with a major
              in information technology before I acquired my current position.
            </p>
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
                  tamle.dev@gmail.com
                </span>
              </li>
              <li className="text-slate-100 text-lg font-bold">
                Linkedin:{" "}
                <span>
                  <a href="https://www.linkedin.com/in/le-tam-3732831b6/">
                    Visit <span className="text-sky-500">Linkedin</span>
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
