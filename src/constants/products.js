const repaymentMapping = {
  BULLET: "만기일시상환",
  EQUAL_INSTALLMENT: "원금균등상환",
};

const repayDescription = {
  BULLET: {
    text1:
      "만기일시상환(滿期一時償還)은 대출이나 채권 등 금융 상품의 원금을 만기일에 한꺼번에 상환하는 방식입니다.",
    text2:
      "이는 이자만을 정기적으로 지불하고, 원금은 대출이나 채권의 만기일에 전액 상환하는 형태입니다.",
  },
  EQUAL_INSTALLMENT: {
    text1:
      "원금균등상환(元金均等償還)은 대출의 원금을 매월 동일한 금액으로 상환하는 방식입니다. ",
    text2:
      "이는 매달 상환하는 금액 중 원금은 동일하고, 이자는 잔여 원금에 따라 감소합니다. 결과적으로 매달 상환하는 총액은 점차 줄어드는 상환 방식입니다.",
  },
};

export { repaymentMapping, repayDescription };
