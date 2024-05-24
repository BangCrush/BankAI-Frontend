import { useState } from "react";

const ProdButtons = () => {
  let [clicked, setClicked] = useState(0);
  let prodType = ["전체", "예금", "적금", "대출", "입출금"];

  return (
    <div>
      {prodType.map((a, i) => (
        <button
          key={i}
          className={`px-14 py-6 mr-10 rounded-20 text-13 ${clicked === i ? "bg-black text-white" : "bg-gray-800 text-black"}`}
          onClick={() => {
            setClicked(i);
          }}
        >
          {a}
        </button>
      ))}
    </div>
  );
};

export default ProdButtons;
