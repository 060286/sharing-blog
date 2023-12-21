import ContentItem from "../ContentItem";
import FadeIn from "react-fade-in/lib/FadeIn";

import "./style.css";

function ContentList({ post }) {
  return (
    <div className="content-list-block">
      {post.content.map((item) => (
        <FadeIn transitionDuration={1000} key={item.id}>
          <ContentItem
            key={item.id}
            notes={item.notes}
            vnNotes={item.vnNotes}
            subject={item.subject}
            vnSubject={item.vnSubject}
          />
        </FadeIn>
      ))}
    </div>
  );
}

export default ContentList;
