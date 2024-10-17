import React, { useEffect, useState } from "react";

const MovingCircles = () => {
  const [circle1Style, setCircle1Style] = useState({});
  const [circle2Style, setCircle2Style] = useState({});
  const [circle3Style, setCircle3Style] = useState({});

  useEffect(() => {
    setCircle1Style({
      animation: "morph1 3s infinite ease-in-out",
    });
    setCircle2Style({
      animation: "morph2 3s infinite ease-in-out",
    });
    setCircle3Style({
      animation: "morph3 3s infinite ease-in-out",
    });
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes morph1 {
            0%, 100% {
              transform: translate(0px, 0px); /* Starting position */
              width: 90px;
              height: 90px;
            } 
            33% {
              transform: translate(150px, -100px); /* Move to second circle position */
              width: 60px;
              height: 60px;
            } 
            66% {
              transform: translate(100px, 100px); /* Move to third circle position */
              width: 140px;
              height: 140px;
            }
          } 

          @keyframes morph2 {
            0%, 100% {
              transform: translate(150px, -100px); /* Second circle starting position */
              width: 60px;
              height: 60px;
            }
            33% {
              transform: translate(100px, 100px); /* Move to third circle position */
              width: 140px;
              height: 140px;
            }
            66% {
              transform: translate(0px, 0px); /* Move to first circle position */
              width: 90px;
              height: 90px;
            }
          }

          @keyframes morph3 {
            0%, 100% {
              transform: translate(100px, 100px); /* Third circle starting position */
              width: 140px;
              height: 140px;
            }
            33% {
              transform: translate(0px, 0px); /* Move to first circle position */
              width: 90px;
              height: 90px;
            }
            66% {
              transform: translate(150px, -100px); /* Move to second circle position */
              width: 60px;
              height: 60px;
            }
          }
        `}
      </style>

      <div
        style={{
          position: "relative",
          width: "400px",
          height: "300px",
          margin: "50px auto",
        }}
      >
        {/* Circle 1 */}
        <div
          style={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: "#333",
            ...circle1Style,
          }}
        />
        {/* Circle 2 */}
        <div
          style={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: "#e5d4c0",
            ...circle2Style,
          }}
        />
        {/* Circle 3 */}
        <div
          style={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: "#d2b48c",
            ...circle3Style,
          }}
        />
      </div>
    </>
  );
};

export default MovingCircles;
