import AccHistory from "stories/molecules/accHistory";
import BlueHeaderBar from "stories/molecules/blueHeaderBar";

const data = [
  {
    hisDateTime: "2024-05-29T12:34:56",
    hisType: "계좌이체",
    target: "임태규",
    hisAmount: -1000,
    balance: 54410400
  },
  {
    hisDateTime: "2024-05-29T12:34:56",
    hisType: "계좌이체",
    target: "임태규",
    hisAmount: -450000,
    balance: 54410400
  },
  {
    hisDateTime: "2024-05-29T12:34:56",
    hisType: "계좌이체",
    target: "임태규",
    hisAmount: -12000,
    balance: 54410400
  },
  {
    hisDateTime: "2024-05-29T12:34:56",
    hisType: "계좌이체",
    target: "임태규",
    hisAmount: 50000,
    balance: 54410400
  },
  {
    hisDateTime: "2024-05-29T12:34:56",
    hisType: "계좌이체",
    target: "임태규",
    hisAmount: -5430,
    balance: 54410400
  },
  {
    hisDateTime: "2024-05-29T12:34:56",
    hisType: "계좌이체",
    target: "임태규",
    hisAmount: 3450040,
    balance: 54410400
  },
  {
    hisDateTime: "2024-05-29T12:34:56",
    hisType: "계좌이체",
    target: "임태규",
    hisAmount: -259000,
    balance: 54410400
  }
]

const AccHistoryPage = () => {
  return (
    <div>
      <BlueHeaderBar text={"홍길동님의 통장"}></BlueHeaderBar>
      <div className="w-full pt-6 pb-19 px-227 bg-sub-color text-center">
        <p className="text-12 mb-14 underline text-gray-950">3333-19-1603492</p>
        <p className="text-26 font-extrabold mb-14">139,626원</p>
        <button className="py-12 px-55 bg-main-color rounded-12 text-14 font-extrabold text-white">이체하기</button>
      </div>
      {
        data.map((a, i) => {
          return (
            <AccHistory data={a}></AccHistory>
          )
        })
      }
    </div>
  );
};

export default AccHistoryPage;