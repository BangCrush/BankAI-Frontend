import React, { useEffect, useState } from "react";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import ShortButton from "stories/atoms/shortButton";
import Title from "stories/atoms/title";

const Page2 = ({ moveNextPage, registForm, setRegistForm }) => {
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const handleAddressDetail = (e) => {
    const userAddrDetail = e.target.value;
    setAddressDetail(userAddrDetail);
    setRegistForm((draft) => {
      draft.userAddrDetail = userAddrDetail;
    });
  };
  const onPopup = () => {
    const url = "zipcode";
    window.open(url, "_blank", "width=500, height=480");
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.address) {
        setAddress(event.data.address);
        setRegistForm((draft) => {
          draft.userAddr = event.data.userAddr;
        });
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [setRegistForm]);

  return (
    <>
      <Title text1={"회원가입"} text2={""} />
      <div className="pl-10">주소지를 입력해주세요.</div>
      <div className="mt-35 flex flex-col space-y-4">
        <div className="flex items-center justify-between space-x-3">
          <Input placeholder={"우편번호"} />
          <span className="mb-10" onClick={onPopup}>
            <ShortButton text={"찾기"} />
          </span>
        </div>

        <Input placeholder={"주소"} value={address || ""} readonly={true} />
        <Input placeholder={"상세주소"} onChange={handleAddressDetail} />
      </div>
      <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!!address && !!addressDetail}
          onClick={moveNextPage}
        />
      </div>
    </>
  );
};

export default Page2;
