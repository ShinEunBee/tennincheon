import React from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
  text-align: center;
`;

export default function Header() {
  return (
    <HeaderBox>
      <h2>오늘 어디서 테니스?🎾</h2>
    </HeaderBox>
  );
}
