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
  border: solid #e2e2e2 1px;
  border-radius: 15px;
  padding: 20px;
  position: relative;
`;

const TitleBox = styled.div`
  justify-content: space-between;
  display: flex;
  background-color: white;
  font-family: "Pretendard-Regular";
`;

const ToggleText = styled.div`
  background-color: white;
  margin-top: -30px;
  padding: 40px 10px 10px 10px;
  border-radius: 0px 0px 15px 15px;
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
        <iframe
          src={
            "https://www.google.com/maps?q=" + item["소재지"] + "&output=embed"
          }
          width="330"
          height={280}
        ></iframe>
      </ToggleText>
    </Box>
  );
}
