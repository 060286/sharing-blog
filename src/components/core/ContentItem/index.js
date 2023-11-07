import React, { useEffect, useState, useContext } from "react";
import { LanguagesContext } from "../../../App";

import { ENGLISH, VIETNAMESE } from "../../../common/commonConstant";

import "./style.css";

function ContentItem(props) {
  const lang = useContext(LanguagesContext);
  const [subject, setSubject] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (lang.language === ENGLISH) {
      setSubject(props.subject);
      setNotes(props.notes);
    }

    if (lang.language === VIETNAMESE) {
      setSubject(props.vnSubject);
      setNotes(props.vnNotes);
    }
  }, [lang]);

  return (
    <div className="content-item-block mt-10 hover:text-green-400 pl-5">
      <p className="text-slate-50 text-xl">{subject}</p>
      {notes?.map((note) => {
        if (note.type === "paragraph") {
          return (
            <p key={props.id} className="text-slate-50 text-base mt-5">
              {note.note}
            </p>
          );
        }

        if (note.type === "img") {
          return (
            <div className="flex justify-center">
              <img className="mt-5" key={props.id} src={note.note} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default ContentItem;
