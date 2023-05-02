// import React from "react";
import "./HomeContainer.css";
import "animate.css";
import data from "./data.json";
import { useNavigate } from "react-router-dom";

const HomeContainer = () => {
const navigate = useNavigate()


  return (
    <>
      <div className="titletext animate__animated animate__fadeIn animate__delay-1s" >
        Notes for BE. Computer
      </div>
      <div className="ag-format-container animate__animated animate__fadeIn animate__delay-1s" >
        <div className="ag-courses_box">
          {

            data.semesters.map((item) => {
              return (
                <div key={item.id} className="ag-courses_item ag-courses-item_link" onClick={()=>navigate('/subject',{state: item})}>
                    <div className="ag-courses-item_bg " />
                    <div className="ag-courses-item_title">{item.sem}</div>
                    <div className="ag-courses-item_date-box">
                      Subjects:<span> </span>
                      <span className="ag-courses-item_date">
                        {item?.sub}
                      </span>
                    </div>
                </div>
              )

            })

          }
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
