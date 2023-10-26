import React from "react";
import { Link } from "react-router-dom";

import FadeIn from "react-fade-in/lib/FadeIn";

import headerData from "../../../dummy/headerData";

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

function Header() {
  return (
    <div className="container mx-auto flex justify-between flex-row-reverse h-20 p-2.5">
      <div>Icon</div>
      <div>
        <ul className="flex">{renderHeader()}</ul>
      </div>
    </div>
  );
}

export default Header;
