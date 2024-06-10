import React, { useEffect, useState } from "react";
import HeaderBar from "stories/molecules/headerBar";
import "styles/animations.css"; // 애니메이션 CSS 파일을 임포트

const PrecautionPage = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // 페이지 로드 후 100ms 지연 후 애니메이션을 시작
    setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    document.scrollingElement.scrollTop = 0;
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
          뱅크시 신용대출
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
          신용대출
        </div>
        <div
          className={`font-medium mt-10 text-16 text-gray-900 ${isAnimated ? "animate-slide-up" : ""}`}
        >
          <div>
            여러 대출 상품이 있지만, 큰 범위로 나누면 담보대출과 신용대출 두
            가지로 나눌 수 있습니다.{" "}
          </div>
          <br />
          <div className="my-1">
            <span className="font-bold">① 담보대출</span> : 담보물(집, 땅,
            보증서 등 가치가 있는 물건)을 은행에 맡기며, 돈을 빌리는것{" "}
          </div>
          <br />
          <div className="my-1">
            <span className="font-bold">② 신용대출</span> : 개인의
            신용(신용등급, 직업,소득,가족관계,기존 대출 및 연체이력 등)으로
            은행에서 돈을 빌리는 것
          </div>
          <div className="mt-14">
            {" "}
            담보대출은 은행으로부터 돈을 빌릴 때 집, 땅, 보증서 등 가치를 가진
            무언가를 맡기며 돈을 빌리는 것이며, 신용대출은 개인의 신용도를
            가지고 돈을 빌리는 것입니다. 쉽게 말해, 신용대출은 순수하게 개인의
            신용(신용등급, 직업, 소득, 가족관계, 기존 대출 및 연체 이력 등)을
            종합적으로 고려하여 돈을 빌려주는 대출입니다. 따라서 안정성이 높은
            우대 직업의 경우, 은행에서 PPL 형태로 우대 금리, 우대 한도를
            제공하기도 합니다.
          </div>
        </div>
      </div>
      <div className="flex flex-col p-25">
        <div
          className={`font-bold text-24 ${isAnimated ? "animate-slide-up" : ""}`}
        >
          신용대출 금리와 한도는 어떻게 결정되나요?
        </div>
        <div
          className={`font-medium text-16 text-gray-900 my-10 ${isAnimated ? "animate-slide-up" : ""}`}
        >
          <div className="mt-10">
            신용대출 금리는 개인의 신용도와 은행거래 실적에 따라 심사를 통해
            자동 산출됩니다. 여기서 사용되는 신용등급은 신용평가기관 (KCB나 NICE
            등)을 참고하기는 하지만, 최종 금리는 각 금융사별로 자체 신용등급
            체계에 의해 결정됩니다. 대출신청을 한 후 상담원이 상담내용 및
            신청자의 소득이나 재직 상태 등을 종합적으로 고려해 심사를 올리고,
            심사 결과가 나와야 본인이 받을 수 있는 정확한 대출 금리를 알 수 있게
            되는 것입니다. 통상적으로 1금융권 은행에서는 5%~10%(기준금리 변동에
            의해 금리 구간 변동이 가능) 사이로 금리가 결정됩니다.
          </div>
          <br />
          <div>
            한편 신용대출 한도는 보통 본인 연 소득의 70%~250% 사이로 결정되는
            것이 일반적입니다. 여기서 타 기관에서 받은 대출은 한도에서
            제외됩니다. 즉 신용대출 한도가 4,000만원인데, 이미 타 기관에서
            1,000만원의 대출을 받았다면 빌릴 수 있는 대출 가능 총 한도는
            3,000만원이 되는 것입니다.
          </div>
        </div>
      </div>
      <div className="flex flex-col p-25 text-white bg-sub-color">
        <div
          className={`font-extrabold text-24 text-supermain-color ${isAnimated ? "animate-slide-up" : ""}`}
        >
          신용대출을 받을 때 꼭 알아야할 유의사항
        </div>
        <div
          className={`font-medium mt-10 text-16 text-gray-900 ${isAnimated ? "animate-slide-up" : ""}`}
        >
          <div className="mt-10">
            신용대출은 담보대출 대비 빠르게 필요한 자금을 빌릴 수 있지만, 그만큼
            위험도 존재합니다. 담보대출의 경우 대출기관이 설정해 둔 저당권이나
            질권에 의해 담보를 현금화하여 그 금액으로 대출액을 변제하게 되므로,
            연체가 되는 경우 자신의 담보가 사라지게 될 뿐, 기존 신용에는 문제가
            없습니다. 하지만 신용대출의 경우에는 신용등급이 하락하는 등 신용도에
            문제가 생겨 이후의 대출이 까다로워지는 등 금융거래에 차질을 빚을 수
            있습니다. 장기간 큰 금액을 연체한 경우 채권추심절차에 따라 강제로
            대금을 상환하거나, 신용불량자가 되어 정상적인 경제 생활을 할 수 없게
            될 수도 있으니 주의하시기 바랍니다.
          </div>
          <br />
          <div>
            대출은 꼭 필요한 범위 내에, 감당할 수 있는 만큼만 받아야 합니다.
            애초에 대출을 받지 않는 것이 가장 좋겠지만, 불가피하다면 적어도
            원리금이 연체되는 것은 막아야 합니다. 깨끗하지 않은 경제생활로
            신용등급이 하락해 기존 금융기관에서 대출을 받지 못한 분들이 다른
            대부업체에서 더 높은 금리로 돈을 빌리게 되는 경우가 참 많습니다.
            책임지지 못할 금리와 대출액을 부담하는 것은 신용불량자로 가는
            지름길이라는 것 잊지 마세요.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrecautionPage;
