import React from "react";

import "./style.css";

function ContentItem(props) {
  return (
    <div className="content-item-block mt-10 hover:text-green-400">
      <p className="text-slate-50 text-xl">{props.subject}</p>
      <p className="text-slate-50 text-base">{props.note}</p>
    </div>
  );
}

export default ContentItem;
