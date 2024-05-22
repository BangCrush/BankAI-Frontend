import MediumButton from "../mediumButton";

const mainCarousel = ({data}) => {
  return (
    <div className="border-1 border-solid border-gray-600 rounded-20 px-20 py-12 max-w-285 max-y-193">
      <p className="text-black-900 text-13 font-semibold mb-10">{data.prodName}</p>
      <p className="text-gray-900 text-10 fon mb-10">{data.prodType} {data.accCode}</p>
      <p className="text-black-900 text-24 font-extrabold mb-10">{data.accBalance}</p>
      <div className="flex gap-x-4 justify-center mb-10">
        <MediumButton text = {"조회하기"}></MediumButton>
        <MediumButton text={"이체하기"} sub = {true}></MediumButton>
      </div>
    </div>
  );
};

export default mainCarousel;
