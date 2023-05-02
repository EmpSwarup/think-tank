// import React from "react";
import "./HomeContainer.css";
import "animate.css";
import data from "./data.json";

const HomeContainer = () => {

  // const subjects = [{
  //   'First Semester': 'Basic Electrical Engineering, Chemistry, Communication Technique, Engineering Mathematics I, Programming in C, Mechanical Workshop',
  //   'Second Semenster': 'Applied Mechanics I, Engineering Drawing, Engineering Mathematics II, Object Oriented Programming in C ++, Physics, Thermal Science',
  //   'Third Semester' : ' Engineering Mathematics III, Data Structure and Algorithms, Electrical Engineering Materials, Electronics Devices andCircuit, Logic Circuit, Network Theory',
  // }]

  // const semester = ['First Semester', 'Second Semester', 'Third Semenster', 'Fourth Semester', 'Five Semester', 'Six Semester', 'Seven Semester', 'Eigth Semester']

  const subjects = [
     {
      id:1,
      sem : 'First Semester',
      sub : 'Basic Electrical Engineering, Chemistry, Communication Technique, Engineering Mathematics I, Programming in C,Mechanical Workshop',
    },
    {
      id:2,
      sem : 'Second Semester',
      sub: ' Applied Mechanics I, Engineering Drawing, Engineering Mathematics II, Object Oriented Programming in C ++, Physics, Thermal Science',

    },
    {
      id:3,
      sem : 'Third Semster',
      sub : 'Engineering Mathematics III, Data Structure and Algorithms, Electrical Engineering Materials, Electronics Devices and Circuit, Logic Circuit, Network Theory'

    },
    {
      id:4,
      sem : 'Fourth Semster',
      sub : 'Engineering Mathematics III, Data Structure and Algorithms, Electrical Engineering Materials, Electronics Devices and Circuit, Logic Circuit, Network Theory'

    },
    {
      id:5,
      sem : 'Fifth Semster',
      sub : 'Engineering Mathematics III, Data Structure and Algorithms, Electrical Engineering Materials, Electronics Devices and Circuit, Logic Circuit, Network Theory'

    },
    {
      id:6,
      sem : 'Sixth Semster',
      sub : 'Engineering Mathematics III, Data Structure and Algorithms, Electrical Engineering Materials, Electronics Devices and Circuit, Logic Circuit, Network Theory'

    },
    {
      id:7,
      sem : 'Seventh Semster',
      sub : 'Engineering Mathematics III, Data Structure and Algorithms, Electrical Engineering Materials, Electronics Devices and Circuit, Logic Circuit, Network Theory'

    },
    {
      id:8,
      sem : 'Eighth Semster',
      sub : 'Engineering Mathematics III, Data Structure and Algorithms, Electrical Engineering Materials, Electronics Devices and Circuit, Logic Circuit, Network Theory'

    }
  ]




  return (
    <>
      <div className="titletext animate__animated animate__fadeIn animate__delay-1s">
        Notes for BE. Computer
      </div>
      <div className="ag-format-container animate__animated animate__fadeIn animate__delay-1s">
        <div className="ag-courses_box">
<<<<<<< HEAD
<<<<<<< HEAD
          {

            subjects.map((item) => {
              return (
                <div key={item.id} className="ag-courses_item">
                  <a href="#" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg" />
                    <div className="ag-courses-item_title">{item.sem}</div>
                    <div className="ag-courses-item_date-box">
                      Subjects:<span> </span>
                      <span className="ag-courses-item_date">
                        {item?.sub}
                      </span>
                    </div>
                  </a>
                </div>
              )

            })

          }
=======
=======
>>>>>>> 22355c9f9912b851d9011d9b54f0b68639a6470f
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
<<<<<<< HEAD
>>>>>>> 22355c9f9912b851d9011d9b54f0b68639a6470f
=======
>>>>>>> 22355c9f9912b851d9011d9b54f0b68639a6470f
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
