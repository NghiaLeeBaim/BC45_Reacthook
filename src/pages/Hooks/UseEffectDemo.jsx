import React, { useState, useEffect } from "react";

const UseEffectDemo = () => {
  const [number, setnumber] = useState(1);
  const [like, setLike] = useState(1);

  // Trường hợp 1 : useEffect 1 tham số
  useEffect(() => {
    // không setState tại đây (muốn setState phải cio1 if)
    // if (number < 1000) {
    //   setnumber(number + 1);
    // }
    // Giống Lifecycle componentsDiMount + ComponentDiUpdate
  });

  // Thường dùng các API dạng tham số get detail (ComponentDiUpdate)
  useEffect(() => {
    console.log("UseEffect dep");
  }, [number]);

  useEffect(() => {
    // UseEffectn tương tự componentsDiMount => thường dùng cho api get all
    console.log('useEffect dep:[]')
  },[]);

  return (
    <div className="container">
      <h3>Number:{number}</h3>

      <button
        className="btn btn-dark"
        onClick={() => {
          setnumber(number + 1);
        }}
      >
        +
      </button>

      <h3>Like: {like}</h3>
      <button
        className="btn btn-danger"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        <i className="fa fa-heart"></i>
      </button>
    </div>
  );
};

export default UseEffectDemo;
