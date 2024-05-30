function LoanInfo({ loanInfo }) {
  console.log(loanInfo);
  function Ht({ title }) {
    console.log(title);
    return <div className="text-15 font-semibold">{title}</div>;
  }
  function Hc({ content, higlight}) {
    return (
      <div className="flex">
        <div className="text-16 font-semibold text-main-color">{higlight}</div>
        <div className="text-16 font-semibold">{content}</div>
      </div>
    );
  }
  return (
    <div className="space-y-5">
      <span className="flex w-full justify-between">
        <Ht title="대출상품" />
        <Hc content={loanInfo.prodName} />
      </span>
      <span className="flex w-full justify-between">
        <Ht title="대출신청금액" />
        <Hc content={loanInfo.loanAmount} />
      </span>
      <span className="flex w-full justify-between">
        <Ht title="대출금리" />
        <Hc higlight={loanInfo.loanRate?.toFixed(2)} content="%" />
      </span>
    </div>
  );
}

export default LoanInfo;
