import React, { useState } from "react";
import { ExerciseData } from "../type/ExerciseData";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type DataProps = {
  item: ExerciseData;
};

export default function ToggleMenu({ item }: DataProps) {
  const [display, setDisplay] = useState(false);

  return (
    <div onClick={() => setDisplay(!display)}>
      {item["동별"]} {item["시설명"]}
      <FontAwesomeIcon icon={display ? faCaretUp : faCaretDown} />
      <div className={display ? "show" : "hide"}>{item["소재지"]}</div>
    </div>
  );
}
