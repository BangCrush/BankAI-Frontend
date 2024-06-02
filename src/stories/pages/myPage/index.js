import { useGetMyInfo } from "hooks/queries/userQueries";
import HeaderBar from "stories/molecules/headerBar";

const MyPage = () => {
  const data = {
    userName: "홍길동",
    userNameEn: "Hong Gildong",
    userPhone: "01023435678",
    userEmail: "dooli@uncle.com",
    userAddr: "서울특별시 아차산로 111",
    userAddrDetail: "라쿠아파트 204동 1509호",
    jobName: "학생/군인",
    companyName: "-",
    companyAddr: "-",
    companyPhone: "-",
  };

  const { data: myData, isLoading, error } = useGetMyInfo();

  console.log(myData);

  return (
    <div className="w-full ">
      <div className="px-50 pt-22">
        <HeaderBar text={"내 정보"}></HeaderBar>
      </div>
      <div className="bg-gray-100 w-full h-14"></div>

      <div className="w-full mt-14 mb-50 p-40 bg-white">
        <div className="w-full">
          <p className="text-18 font-bold mb-13">기본정보</p>
          <div className="my-15 flex flex-col space-y-3.5 text-14">
            <div className="flex space-x-6">
              <span className="w-100">이름</span>
              <span className="font-semibold">{myData.userNameKr}</span>
            </div>
            <div className="flex space-x-6">
              <span className="w-100">영문이름</span>
              <span className="font-semibold">{myData.userNameEn}</span>
            </div>
            <div className="flex space-x-6">
              <span className="w-100">휴대폰 번호</span>
              <span className="font-semibold">{myData.userPhone}</span>
            </div>
            <div className="flex space-x-6">
              <span className="w-100">이메일</span>
              <span className="font-semibold">{myData.userEmail}</span>
            </div>
          </div>
          <hr className="mb-20" />
        </div>
        <div className="w-full">
          <p className="text-18 font-bold mb-13">자택 정보</p>
          <div className="my-15 flex flex-col space-y-3.5 text-14">
            <div className="flex space-x-6">
              <span className="w-100">주소</span>
              <span className="font-semibold">
                {myData.userAddr} {myData.userAddrDetail}
              </span>
            </div>
          </div>
          <hr className="mb-20" />
        </div>
        <div className="w-full">
          <p className="text-18 font-bold mb-13">직장 정보</p>
          <div className="my-15 flex flex-col space-y-3.5 text-14">
            <div className="flex space-x-6">
              <span className="w-100">직업</span>
              <span className="font-semibold">{myData.jobName}</span>
            </div>
            <div className="flex space-x-6">
              <span className="w-100">직장명</span>
              <span className="font-semibold">
                {myData.companyName ? myData.companyName : "-"}
              </span>
            </div>
            <div className="flex space-x-6">
              <span className="w-100">주소</span>
              <span className="font-semibold">
                {myData.companyAddr ? myData.companyAddr : "-"}
              </span>
            </div>
            <div className="flex space-x-6">
              <span className="w-100">전화번호</span>
              <span className="font-semibold">
                {myData.companyPhone ? myData.companyPhone : "-"}
              </span>
            </div>
          </div>
          <hr className="mb-20" />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
