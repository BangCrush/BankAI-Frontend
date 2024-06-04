import HeaderBar from "stories/molecules/headerBar";
import Warning from "stories/molecules/warning";

const refuseLoanPage = () => {
  const toProduct = () => {
    window.location.href = "/product"
  }
  return (
    <div>
      <HeaderBar text={"대출가입"}></HeaderBar>
      <div className="mt-50 mb-98 px-100">
        <Warning
          title={"대출이 어렵습니다"}
          subtitle={"연 소득 금액이 부족합니다."}
        ></Warning>
      </div>
      <div className="bg-main-bg p-30 rounded-12">
        <p className="text-15 font-semibold mb-10">다른 대출을 찾아볼까요?</p>
        <button className="bg-white py-14 px-10 w-full rounded-12" onClick={toProduct}>
          다른 대출 상품 알아보기
        </button>
      </div>
    </div>
  );
};

export default refuseLoanPage;
