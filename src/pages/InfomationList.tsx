import React, { useState, useEffect } from "react";

export default function InformationList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.odcloud.kr/api/15089250/v1/uddi:8ac852eb-4b3f-470c-8342-bbcc701e0b8b?page=1&perPage=126&serviceKey=" +
        process.env.REACT_APP_API_KEY,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {

        setList(
          data.data.filter(
            (jsonData:any) => jsonData["체육시설현황"].indexOf("테니스") !== -1
          )
        );

      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {list.map((item, index) => (
        <div key={index}>
          {item["동별"]} {item["시설명"]}
          <br />
        </div>
      ))}
    </>
  );
}
