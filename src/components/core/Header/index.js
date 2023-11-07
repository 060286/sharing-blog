import React, { useContext } from "react";
import { Link } from "react-router-dom";

import FadeIn from "react-fade-in/lib/FadeIn";

import headerData from "../../../dummy/headerData";
import languagesData from "../../../dummy/languagesData";
import { LanguagesContext } from "../../../App";

function Header() {
  const languages = useContext(LanguagesContext);

  const handleClickLanguageBtn = (name) => {
    languages.changeLanguages(name);
  };

  return (
    <div className="container mx-auto flex justify-between flex-row-reverse h-20 p-2.5">
      <div className="flex gap-2">
        {languagesData.map((lang) => (
          <p
            key={lang.id}
            onClick={() => handleClickLanguageBtn(lang.name)}
            className="text-slate-50 underline hover:text-green-400 cursor-pointer"
          >
            {lang.name}
          </p>
        ))}
      </div>
      <div>
        <ul className="flex">{renderHeader()}</ul>
      </div>
    </div>
  );
}

const renderHeader = () => {
  return headerData.map((el) => (
    <li key={el.title} className="p-6">
      <FadeIn transitionDuration={1000}>
        <Link
          className="text-slate-100 hover:text-green-400 font-extrabold text-3xl underline "
          to={el.to}
        >
          {el.title}
        </Link>
      </FadeIn>
    </li>
  ));
};

export default Header;
