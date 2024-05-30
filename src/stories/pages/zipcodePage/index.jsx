import DaumPostcode from "react-daum-postcode";

const ZipCodePage = () => {
  // postMessage() => 주어진 데이터를 다른 창으로 전달하는 역할
  const onCompletePost = (data) => {
    const address = data.address;
    window.opener.postMessage({ address }, "*");
    window.close();
  };
  const postCodeStyle = {
    width: "100%",
    height: "100vh",
  };
  return (
    <div>
      <DaumPostcode
        style={postCodeStyle}
        onComplete={onCompletePost}
      ></DaumPostcode>
    </div>
  );
};

export default ZipCodePage;
