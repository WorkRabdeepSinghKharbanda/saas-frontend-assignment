/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import useTableNavigatorData from "../../hooks/useTableNavigatorDetails";
import styles from "./style.module.scss";

interface TableNavigatorProps {
  data: any;
  row: number;
}

export const TableNavigator: React.FC<TableNavigatorProps> = ({
  data,
  row,
}) => {
  const len = data.length;
  const totalInstances = Math.ceil(len / row);

  const { currentNavigatorPage, setTableNavigatorPage } =
    useTableNavigatorData();

  const isPrevDisabled = currentNavigatorPage <= 1;
  const isNextDisabled = currentNavigatorPage >= totalInstances;

  const getPageButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, currentNavigatorPage - 2);
    const endPage = Math.min(totalInstances, currentNavigatorPage + 2);

    if (currentNavigatorPage === 1 || currentNavigatorPage === 2) {
      for (let i = 1; i <= Math.min(5, totalInstances); i++) {
        buttons.push(i);
      }
    } else if (
      currentNavigatorPage === totalInstances ||
      currentNavigatorPage === totalInstances - 1
    ) {
      for (let i = Math.max(1, totalInstances - 4); i <= totalInstances; i++) {
        buttons.push(i);
      }
    } else {
      for (let i = startPage; i <= endPage; i++) {
        buttons.push(i);
      }
    }
    return buttons;
  };

  return (
    <div className={`${styles["table-pagination-container"]}`}>
      <button
        className={`${styles["pagination-button"]}`}
        disabled={isPrevDisabled}
        onClick={() => setTableNavigatorPage(currentNavigatorPage - 1)}
      >
        Prev
      </button>

      {getPageButtons().map((page) => (
        <button
          key={page}
          className={`${styles["pagination-button-page"]} ${
            currentNavigatorPage === page ? styles["active-page"] : ""
          }`}
          onClick={() => setTableNavigatorPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`${styles["pagination-button"]}`}
        disabled={isNextDisabled}
        onClick={() => setTableNavigatorPage(currentNavigatorPage + 1)}
      >
        Next
      </button>
    </div>
  );
};
