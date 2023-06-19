import React, { useState } from "react";

const UseStateDemo = () => {
  const [number, setNumber] = useState(10);
  const [img, setIMG] = useState(
    "https://th.bing.com/th/id/OIP.fOXq5wRt8b42mYXc3-yOUgHaEo?pid=ImgDet&rs=1"
  );
  const [fontSize, setFontSize] = useState(16);

  const changeFontsize = (size) => {
    let newSize = fontSize + size;
    setFontSize(newSize);
  };

  //   This state={
  //     number: 1,
  //     state2:'src'
  // }

  return (
    <div className="container">
      <h3>Number:{number}</h3>
      <button
        className="btn btn-dark"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>

      <hr />

      <h3 className="mt-2">Ví dụ 2: Tinder Fake</h3>
      <div className="card w-25">
        <div className="card">
          <img src={img} alt={"..."} />
          <div className="card-body text-center">
            <button
              className="btn btn-white mx-2"
              onClick={() => {
                let newIMG = `https://i.pravatar.cc?u=${Math.floor(
                  Math.random() * 100
                )}`;
                setIMG(newIMG);
              }}
            >
              <i className="fa fa-close text-success fs-3"></i>
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                let newIMG = `https://i.pravatar.cc?u=${Math.floor(
                  Math.random() * 100
                )}`;
                setIMG(newIMG);
              }}
            >
              Random
            </button>
            <button
              className="btn btn-white mx-2"
              onClick={() => {
                let newIMG = `https://i.pravatar.cc?u=${Math.floor(
                  Math.random() * 100
                )}`;
                setIMG(newIMG);
              }}
            >
              <i className="fa fa-heart text-danger fs-3"></i>
            </button>
          </div>
        </div>
      </div>

      <hr />

      <h3>Ví dụ 3: </h3>

      <p style={{ fontSize }}>Anh Nghĩa ĐẸP TRAI quá</p>

      <button
        className="btn btn-danger mx-5"
        onClick={() => {
          changeFontsize(3);
        }}
      >
        +
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          changeFontsize(-3);
        }}
      >
        -
      </button>
    </div>
  );
};

export default UseStateDemo;
