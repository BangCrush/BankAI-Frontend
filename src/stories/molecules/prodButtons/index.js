import { useState } from "react";

const ProdButtons = () => {

  let [clicked, setClicked] = useState(0);
  let prodType = ['전체', '예금', '적금', '대출', '입출금'];

  return (
    <div className="max-w-360">
      {prodType.map((a, i) => (
        <button 
        key={i} 
        className={`px-10 py-6 mr-10 rounded-20 text-11 ${clicked === i ? "bg-black text-white" : "bg-gray-800 text-black"}`}
        onClick={() => {setClicked(i)}}>
          {a}
        </button>
      ))}
    </div>
  );
};

export default ProdButtons;


