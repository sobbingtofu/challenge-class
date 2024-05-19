import "./Pikachu.css";
import {useRef} from "react";

const Pikachu = () => {
  const pikaRef = useRef(null);
  const pikaTranslateX = useRef(0);
  const pikaTranslateY = useRef(0);
  const pikaFaceDirection = useRef("left");
  const jumpingStatus = useRef(false);

  const navigatePikachu = (e) => {
    // 점프 중인 상태에선 방향키 입력 시 움직임 발생 방지
    if (jumpingStatus.current) {
      return;
    }

    if (pikaFaceDirection.current === "left") {
      if (e.key === "ArrowDown") {
        if (pikaTranslateY.current < 340) {
          pikaTranslateY.current += 20;
          pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(1)`;
        }
      } else if (e.key === "ArrowUp") {
        if (pikaTranslateY.current > -380) {
          pikaTranslateY.current -= 20;
          pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(1)`;
        }
      } else if (e.key === "ArrowRight") {
        pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(-1)`;
        pikaFaceDirection.current = "right";
      } else if (e.key === "ArrowLeft") {
        if (pikaTranslateX.current > -380) {
          pikaTranslateX.current -= 20;
          pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(1)`;
        }
      } else if (e.key === " ") {
        console.log("jump");
        jumpPikachu();
      }
    } else {
      if (e.key === "ArrowDown") {
        if (pikaTranslateY.current < 340) {
          pikaTranslateY.current += 20;
          pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(-1)`;
        }
      } else if (e.key === "ArrowUp") {
        if (pikaTranslateY.current > -380) {
          pikaTranslateY.current -= 20;
          pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(-1)`;
        }
      } else if (e.key === "ArrowRight") {
        if (pikaTranslateX.current < 340) {
          pikaTranslateX.current += 20;
          pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(-1)`;
        }
      } else if (e.key === "ArrowLeft") {
        pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(1)`;
        pikaFaceDirection.current = "left";
      } else if (e.key === " ") {
        console.log("jump");
        jumpPikachu();
      }
    }
  };

  //피카츄를 점프시키는 함수
  const jumpPikachu = () => {
    if (jumpingStatus.current) return;
    jumpingStatus.current = true;
    const jumpHeight = 50;
    const jumpDuration = 50;

    // 위로 이동
    pikaTranslateY.current -= jumpHeight;
    pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(${
      pikaFaceDirection.current === "left" ? 1 : -1
    })`;

    setTimeout(() => {
      // 아래로 이동
      pikaTranslateY.current += jumpHeight;
      pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(${
        pikaFaceDirection.current === "left" ? 1 : -1
      })`;
      jumpingStatus.current = false;
    }, jumpDuration);
  };

  window.addEventListener("keydown", navigatePikachu);

  return <div className="Pikachu" ref={pikaRef}></div>;
};

export default Pikachu;
