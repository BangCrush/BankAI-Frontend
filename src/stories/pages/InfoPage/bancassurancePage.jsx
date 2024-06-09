import React, { useEffect, useState } from "react";
import HeaderBar from "stories/molecules/headerBar";
import "styles/animations.css"; // 애니메이션 CSS 파일을 임포트

const BancassurancePage = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // 페이지 로드 후 100ms 지연 후 애니메이션을 시작
    setTimeout(() => {
      setIsAnimated(true);
    }, 100);
  }, []);

  return (
    <div className="pt-27 w-640 flex flex-col min-h-screen">
      <div className="px-40">
        <HeaderBar text={"금융상식톡톡"} />
      </div>
      <div className="bg-gray-100 w-full h-14"></div>
      <div className="flex flex-col justify-center items-center py-25 text-center">
        <div
          className={`font-bold text-24 ${isAnimated ? "animate-slide-up" : ""}`}
        >
          뱅크시 방카슈랑스
        </div>
        <div
          className={`font-medium text-14 text-gray-900 ${isAnimated ? "animate-slide-up" : ""}`}
        >
          뱅크시와 시작하는 쉬운 금융상식{" "}
        </div>
        <img
          className="w-160"
          src={"/assets/bancassurance.gif"}
          alt="bancassurance"
        />
      </div>
      <div className="flex flex-col p-25 text-white bg-sub-color">
        <div
          className={`font-extrabold text-24 text-supermain-color ${isAnimated ? "animate-slide-up" : ""}`}
        >
          방카슈랑스 (Banque+Assurance)
        </div>
        <div
          className={`font-medium mt-10 text-15 text-gray-900 ${isAnimated ? "animate-slide-up" : ""}`}
        >
          방카슈랑스는 프랑스어로 은행을 가르키는 ‘Banque’와 보험을 뜻하는
          ‘Assurance’의 합성어로서, 은행 등 금융기관이 보험회사의 대리점과 같은
          역할을 수행하여 보험 상품을 판매하는 것을 의미합니다. 은행의
          방카슈랑스 업무는 금융시장의 개방과 자유화에 맞추어 2003년 하반기부터
          본격 시행되었습니다.
        </div>
      </div>
      <div className="flex flex-col p-25">
        <div
          className={`font-bold text-24 ${isAnimated ? "animate-slide-up" : ""}`}
        >
          방카슈랑스의 특징 및 장점
        </div>
        <div
          className={`font-medium text-14 text-gray-900 my-10 ${isAnimated ? "animate-slide-up" : ""}`}
        >
          <span className="font-bold text-18">- 저렴한 보험료</span>
          <br />
          <div className="mt-10">
            보험료는 고객에게 지급할 재원이 되는 순보험료와 보험계약을 모집 및
            유지관리하기 위한 보험회사의 사업비로 구성되어 있습니다. 은행은 이미
            구축되어 있는 점포망 및 판매조직을 활용하여 보험상품을 판매하므로
            사업비를 절감할 수 있어 다른 보험 채널에 비하여 보험료가 저렴합니다.
          </div>
        </div>
        <div
          className={`font-medium text-14 text-gray-900 my-10 ${isAnimated ? "animate-slide-up" : ""}`}
        >
          <span className="font-bold text-18">- 편리한 서비스 제공</span>
          <br />
          <div className="mt-10">
            방카슈랑스를 통하여 고객은 여러 보험사를 일일이 방문할 필요 없이
            가정이나 사무실 근처의 은행에서 자신의 필요에 따른 보험상품을 접할
            수 있어 편리합니다. 또한 고객은 은행점포에서 보다 다양한 보험상품을
            직접 비교함으로써 자신에게 유리한 상품을 고를 수 있어 선택권이
            확대되며, 은행은 고객에게 은행상품 뿐만 아니라 보험상품 등을
            제공하여 고객에게 포괄적인 자산관리 서비스를 제공할 수 있어 고객의
            편의성이 증대됩니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BancassurancePage;
