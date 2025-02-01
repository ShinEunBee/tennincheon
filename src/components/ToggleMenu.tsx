import React, { useState } from "react";
import { ExerciseData } from "../type/ExerciseData";

type DataProps = {
  item: ExerciseData;
};

export default function ToggleMenu({ item }: DataProps) {
  const [display, setDisplay] = useState(false);

  return (
    <div onClick={()=>setDisplay(!display)}>
      {item["동별"]} {item["시설명"]}
      <div className={display ? 'show' : 'hide'}>{item["소재지"]}</div>
    </div>
  );
}
