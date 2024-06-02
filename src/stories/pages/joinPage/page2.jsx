import React, { useEffect, useState } from "react";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import ShortButton from "stories/atoms/shortButton";
import Title from "stories/atoms/title";

const Page2 = ({ moveNextPage, registForm, setRegistForm }) => {
  const [zipcode, setZipcode] = useState(null);

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setRegistForm((draft) => {
      draft[field] = value;
    });
  };

  const onPopup = () => {
    const url = "zipcode";
    window.open(url, "_blank", "width=500, height=480");
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.address) {
        setRegistForm((draft) => {
          draft.userAddr = event.data.address;
        });
      }
      if (event.data.zonecode) {
        console.log("zipcode", event.data.zonecode);
        setZipcode(event.data.zonecode);
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
          <Input
            placeholder={"우편번호"}
            value={zipcode || ""}
            readonly={true}
          />
          <span onClick={onPopup}>
            <ShortButton text={"찾기"} active={true} />
          </span>
        </div>

        <Input
          placeholder={"주소"}
          value={registForm.userAddr || ""}
          readonly={true}
          onChange={handleChange("userAddr")}
        />
        <Input
          placeholder={"상세주소"}
          onChange={handleChange("userAddrDetail")}
        />
      </div>
      <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!!registForm.userAddr && !!registForm.userAddrDetail}
          onClick={moveNextPage}
        />
      </div>
    </>
  );
};

export default Page2;
