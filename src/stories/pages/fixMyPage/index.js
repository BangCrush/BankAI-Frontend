import { accFormatter } from "globalFunc/formatter";
import { useFixMyInfo, useGetMyInfo } from "hooks/queries/userQueries";
import { useRef, useState } from "react";
import MediumButton from "stories/atoms/mediumButton";
import HeaderBar from "stories/molecules/headerBar";
import { useImmer } from "use-immer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FixMyInfoPage = () => {
  const [fixForm, setFixForm] = useImmer({
    userPwd: "",
    userEmail: "",
    userPhone: "",
    userAddr: "",
    userAddrDetail: "",
    userTrsfLimit: 0,
    userMainAcc: "",
  });
  const mainRef = useRef(null);
  const limitRef = useRef(null);
  const pwdRef = useRef(null);

  const navigate = useNavigate();

  const { mutate: fixMyInfo } = useFixMyInfo();
  const { data: myData, isLoading } = useGetMyInfo();

  const handleFixForm = () => {
    let newMain = mainRef.current.value;
    let newLimit = limitRef.current.value;
    let pwd = pwdRef.current.value;
    setFixForm((draft) => {
      draft.userEmail = myData.userEmail;
      draft.userPhone = myData.userPhone;
      draft.userAddr = myData.userAddr;
      draft.userAddrDetail = myData.userAddrDetail;
      draft.userMainAcc = !!newMain
        ? accFormatter(newMain)
        : myData.userMainAcc;
      draft.userTrsfLimit = !!newLimit
        ? parseInt(newLimit)
        : myData.userTrsfLimit;
      draft.userPwd = pwd;
    });
  };
  useEffect(() => {
    if (fixForm.userPwd) {
      fixMyInfo(fixForm);
      setTimeout(() => {
        window.location.href = '/myInfo';
      }, 1000);
      // console.log(fixForm);
    }
  }, [fixForm]);

  // console.log(fixForm);
  // console.log(myData);

  return (
    <div className="w-full ">
      <div className="px-50 pt-22">
        <HeaderBar text={"내 정보"}></HeaderBar>
      </div>
      <div className="bg-gray-100 w-full h-14"></div>
      {myData && (
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
            <p className="text-18 font-bold mb-13">계좌 정보</p>
            <div className="my-15 flex flex-col space-y-3.5 text-14">
              <div className="flex space-x-6">
                <span className="w-100">주거래 계좌</span>
                <input
                  className="text-right font-bold border px-5 rounded-8 focus:outline-none"
                  type="text"
                  placeholder={myData.userMainAcc}
                  ref={mainRef}
                />
              </div>
              <div className="flex space-x-6">
                <span className="w-100">일일 이체 한도</span>
                <input
                  className="text-right font-bold border px-5 rounded-8 focus:outline-none"
                  type="text"
                  placeholder={myData.userTrsfLimit.toLocaleString()}
                  ref={limitRef}
                />
                <span className="font-semibold mx-0">원</span>
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
            <div className="w-full">
              <div className="my-15 flex flex-col space-y-3.5 text-14">
                <div className="flex space-x-6">
                  <span className="w-100 mt-10">비밀번호 수정</span>
                  <input
                    className="text-right font-bold border p-10 rounded-8 focus:outline-none"
                    type="password"
                    placeholder={"계정 비밀번호를 입력해주세요"}
                    ref={pwdRef}
                  />
                </div>
              </div>
              <hr className="mb-20" />
            </div>
            <MediumButton
              text={"수정하기"}
              onClick={handleFixForm}
            ></MediumButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default FixMyInfoPage;
