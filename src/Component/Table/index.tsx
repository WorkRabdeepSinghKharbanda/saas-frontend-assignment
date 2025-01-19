/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import style from "./style.module.scss";

export const Table = ({
  data,
  row,
  column,
  heading,
  page,
}: {
  data: any;
  row: number;
  column: number;
  heading: string[];
  page: number;
}) => {
  const [arrayretainedData, setArrayretainedData] = useState<any[]>([]);

  const dataRefactor = () => {
    const currentPageDataLower = row * (page - 1);
    const currentPageDataUpper = row * page;
    const currentData = data.slice(currentPageDataLower, currentPageDataUpper);
    setArrayretainedData(currentData);
  };

  useEffect(() => {
    dataRefactor();
  }, [page]);

  return (
    <div
      className={style["table-data-display-container"]}
      style={{
        gridTemplateColumns: `repeat(${column}, 1fr)`,
        gridTemplateRows: `repeat(${row + 1}, auto)`,
      }}
    >
      {heading.map((currentHeading, index) => (
        <div
          key={index}
          className={style["table-data-item"]}
          style={{ fontFamily: "UniSans,Arial,sans-serif" }}
        >
          <b>{currentHeading}</b>
        </div>
      ))}

      {arrayretainedData.map((currentValue, key) => (
        <React.Fragment key={key}>
          <div className={style["table-data-item"]}>{currentValue["s.no"]}</div>
          <div className={style["table-data-item"]}>
            {currentValue["percentage.funded"]}
          </div>
          <div className={style["table-data-item"]}>
            {currentValue["amt.pledged"]}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
