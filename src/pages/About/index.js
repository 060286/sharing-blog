import React from "react";

import myAvatar from "../../assets/my-avater.jpg";
import netCoreImg from "../../assets/dot_net_image.png";

import "./style.css";

function About() {
  return (
    <div className="container h-screen mx-auto mt-5 flex flex-row justify-between">
      <div className="container-info basis-7/12 p-7 flex flex-col">
        <p className="text-slate-100 uppercase font-sans text-6xl font-bold ">
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
          I worked as <span className="text-orange-400">FPT Software</span> for
          2.5 years after graduating from HUTECH University with a major in
          information technology before I acquired my current position.
        </p>
        <p className="text-slate-100 mt-2.5 text-lg font-bold">
          Tech stacks: .NET Core, Entity Framework Core, XUnit, NUnit, Web API,
          MS SQL, RESTFUL API, REACT JS, AZURE CLOUD PLATFORMS, etc.
        </p>
        <p className="text-slate-100 mt-2.5 text-xl font-bold">Contacts</p>
        <ul>
          <li>
            <span className="text-slate-100 text-lg font-bold">Email: </span>
            <span className="text-slate-100 text-lg font-bold">
              tamle.dev@gmail.com
            </span>
          </li>
          <li className="text-slate-100 text-lg font-bold">
            Linkedin:{" "}
            <span>
              <a href="https://www.linkedin.com/in/le-tam-3732831b6/">
                Visit Linkedin
              </a>
            </span>
          </li>
          <li className="text-slate-100 text-lg font-bold">
            Github:{" "}
            <span>
              <a href="https://github.com/060286">Visit Github</a>
            </span>
          </li>
        </ul>
      </div>
      <div className="container-avatar basis-5/12 flex flex-row p-7 justify-center w-full">
        <div className="w-96">
          <img src={myAvatar} />
        </div>
      </div>
    </div>
  );
}

export default About;
