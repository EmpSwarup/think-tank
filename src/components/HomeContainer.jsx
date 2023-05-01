import React from "react";
import "./HomeContainer.css";
import "animate.css";

const HomeContainer = () => {
  return (
    <>
      <div className="titletext animate__animated animate__fadeIn animate__delay-1s">
        Notes for BE. Computer
      </div>
      <div className="ag-format-container animate__animated animate__fadeIn animate__delay-1s">
        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">First Semester</div>
              <div className="ag-courses-item_date-box">
                Subjects:<span> </span>
                <span className="ag-courses-item_date">
                  Basic Electrical Engineering, Chemistry, Communication
                  Technique, Engineering Mathematics I, Programming in C,
                  Mechanical Workshop
                </span>
              </div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">Second Semester</div>
              <div className="ag-courses-item_date-box">
                Subjects:<span> </span>
                <span className="ag-courses-item_date">
                  Applied Mechanics I, Engineering Drawing, Engineering
                  Mathematics II, Object Oriented Programming in C ++, Physics,
                  Thermal Science
                </span>
              </div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">Third Semester</div>
              <div className="ag-courses-item_date-box">
                Subjects:<span> </span>
                <span className="ag-courses-item_date">
                  Engineering Mathematics III, Data Structure and Algorithms,
                  Electrical Engineering Materials, Electronics Devices and
                  Circuit, Logic Circuit, Network Theory
                </span>
              </div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">Fourth Semester</div>
              <div className="ag-courses-item_date-box">
                Subjects:<span> </span>
                <span className="ag-courses-item_date">
                  Database Management Systems, Engineering Mathematics IV,
                  Instrumentation, Microprocessor, Project I, Programming
                  Technology
                </span>
              </div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">Fifth Semester</div>
              <div className="ag-courses-item_date-box">
                Subjects:<span> </span>
                <span className="ag-courses-item_date">
                  {" "}
                  Advanced Computer Architecture, Computer Graphics, Distributed
                  Operating System, Numerical Methods, Probability and
                  Statistics, Theory of Computation
                </span>
              </div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">Sixth Semester</div>
              <div className="ag-courses-item_date-box">
                Subjects:<span> </span>
                <span className="ag-courses-item_date">
                  {" "}
                  Data Communication, Elective-I, Embedded Systems, Object
                  Oriented Software Engineering, Project II, Simulation and
                  Modelling
                </span>
              </div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">Seventh Semester</div>
              <div className="ag-courses-item_date-box">
                Subjects:<span> </span>
                <span className="ag-courses-item_date">
                  {" "}
                  Artificial Intelligence, Computer Network, Elective II,
                  Engineering Economics, ICT Project Management, Image
                  Processing and Pattern Recognition
                </span>
              </div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">Eighth Semester</div>
              <div className="ag-courses-item_date-box">
                Subjects:<span> </span>
                <span className="ag-courses-item_date">
                  Social & Professional Issues in IT, Project III, Organization
                  and Management, Information Systems, Elective III, Digital
                  Signal Analysis and Processing
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
