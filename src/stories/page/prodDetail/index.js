import HeaderBar from 'stories/molecules/headerBar';
import ProdDetailItem from 'stories/molecules/prodDetailItem';

const ProdDetail = ({data}) => {
  return (
    <div className='w-full font-sans'>
      <HeaderBar text={data.prodType}></HeaderBar>
      <div className='bg-main-color px-30 py-35 text-20 font-extrabold text-white'>
        <p>오늘의 금리는?</p>
        <p className='mb-40'>{data.prodPromo}</p>
        <p className='mb-40'>{data.prodName}</p>
        <p className='my-10'>연(세전, 1년)</p>
        <p>최고 {data.prodRate}%</p>
      </div>
      <div className='bg-yellow-700 h-200'>

      </div>
      <div className='bg-gray-200 px-40 pt-30 pb-62'>
        <div className='py-17'>
          <div className='beforesign mb-16'>
            <p className='text-18 font-extrabold'>가입 전 확인해 주세요!</p>
            <p className='text-13'>{data.prodCaution}</p>
          </div>
          <div className='flex flex-col space-y-4'>
            <ProdDetailItem title={"상품특징"} content={data.prodDesc}></ProdDetailItem>
            <ProdDetailItem title={"가입대상"} content={data.joinMember}></ProdDetailItem>
            <ProdDetailItem title={"예금종류"} content={"정기예금"}></ProdDetailItem>
            <ProdDetailItem title={"가입기간"} content={"1백만원 이상"}></ProdDetailItem>
            <ProdDetailItem title={"가입금액"} content={data.prodMin + " 이상 " + data.prodMax + " 이하"}></ProdDetailItem>
            <ProdDetailItem title={"이자지급방법"} content={"만기일시지급식: 만기(후) 해지시 원금과 함께 지급"}></ProdDetailItem>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProdDetail;
