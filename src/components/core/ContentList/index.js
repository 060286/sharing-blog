import React from "react";

import ContentItem from "../ContentItem";
import FadeIn from "react-fade-in/lib/FadeIn";

import "./style.css";

function ContentList({ post }) {
  return (
    <div className="content-list-block">
      {post.content.map((item) => (
        <FadeIn transitionDuration={1000}>
          <ContentItem note={item.note} subject={item.subject} />
        </FadeIn>
      ))}
    </div>
  );
}

export default ContentList;
