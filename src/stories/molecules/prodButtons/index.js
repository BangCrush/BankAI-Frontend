const ProdButtons = ({clicked, setClicked}) => {
  let prodType_ko = ["전체", "입출금", "예금", "적금", "대출", "검색"];

  return (
    <div>
      {prodType_ko.map((a, i) => (
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
