import React, { useState } from "react";
import { ExerciseData } from "../type/ExerciseData";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

type DataProps = {
  item: ExerciseData;
};

const Box = styled.div`
  margin: 0 auto;
  max-width: 350px;
  margin-bottom: 15px;
`;

const TextBox = styled.div`
  background-color: white;
  border: solid black 1px;
  border-radius: 15px;
  padding: 10px;

  position: relative;
`;

const TitleBox = styled.div`
  justify-content: space-between;
  display: flex;
  background-color: white;
`;

const ToggleText = styled.div`
  background-color: #e3ff9f;
  padding: 10px;
`;

export default function ToggleMenu({ item }: DataProps) {
  const [display, setDisplay] = useState(false);

  return (
    <Box>
      <TextBox onClick={() => setDisplay(!display)}>
        <TitleBox>
          <span>
            {" "}
            {item["동별"]} {item["시설명"]}
          </span>

          <FontAwesomeIcon icon={display ? faCaretUp : faCaretDown} />
        </TitleBox>
      </TextBox>

      <ToggleText className={display ? "show" : "hide"}>
        {item["소재지"]}
      </ToggleText>
    </Box>
  );
}
