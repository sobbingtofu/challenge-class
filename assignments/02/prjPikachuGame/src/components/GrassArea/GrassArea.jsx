import "./GrassArea.css";
import Pikachu from "../Pikachu/Pikachu.jsx";

const GrassArea = () => {
  const ARRAY_TO_HUNDRED = Array.from({length: 100}, (v, i) => i + 1);

  return (
    <>
      <div className="grass-area">
        <Pikachu />
        {ARRAY_TO_HUNDRED.map((number) => {
          return <section className="grass-tile" key={number}></section>;
        })}
      </div>
    </>
  );
};

export default GrassArea;
