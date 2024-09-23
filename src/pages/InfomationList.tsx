import React, { useState, useEffect } from "react";

export default function InformationList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      "",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // setList(
        //   data.data.filter(
        //     (jsonData:JSON) => jsonData["체육시설현황"].indexOf("테니스") !== -1
        //   )
        // );
        setList(data.data)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function testFunc() {
    console.log(list);
  }

  return (
    <>
      <p onClick={testFunc}>클릭</p>
    </>
  );
}
