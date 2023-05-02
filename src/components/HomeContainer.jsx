import React from "react";
import "./HomeContainer.css";
import "animate.css";
import data from "./data.json";

const HomeContainer = () => {
  return (
    <>
      <div className="titletext animate__animated animate__fadeIn animate__delay-1s">
        Notes for BE. Computer
      </div>
      <div className="ag-format-container animate__animated animate__fadeIn animate__delay-1s">
        <div className="ag-courses_box">
          {data.semesters.map((item) => {
            return (
              <div key={item.id} className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg" />
                  <div className="ag-courses-item_title">{item.sem}</div>
                  <div className="ag-courses-item_date-box">
                    Subjects:<span> </span>
                    <span className="ag-courses-item_date">{item?.sub}</span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
