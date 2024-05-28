import HeaderBar from 'stories/molecules/headerBar';

const MyPage = ({data}) => {
  return (
    <div className='w-full bg-gray-100'>
      <HeaderBar text={"내 정보"}></HeaderBar>
      <div className='w-full mt-14 mb-50 p-40 bg-white'>
        <div className='w-full'>
          <p className='text-16 font-extrabold mb-10'>기본정보</p>
          <div className='my-15 flex flex-col space-y-3.5 text-14'>
            <div className='flex space-x-6'>
              <span className='w-100'>이름</span>
              <span className='font-semibold'>{data.userName}</span>
            </div>
            <div className='flex space-x-6'>
              <span className='w-100'>영문이름</span>
              <span className='font-semibold'>{data.userNameEn}</span>
            </div>
            <div className='flex space-x-6'>
              <span className='w-100'>휴대폰 번호</span>
              <span className='font-semibold'>{data.userPhone}</span>
            </div>
            <div className='flex space-x-6'>
              <span className='w-100'>이메일</span>
              <span className='font-semibold'>{data.userEmail}</span>
            </div>
          </div>
          <hr className='mb-20'/>
        </div>
        <div className='w-full'>
          <p className='text-16 font-extrabold mb-10'>자택 정보</p>
          <div className='my-15 flex flex-col space-y-3.5 text-14'>
            <div className='flex space-x-6'>
              <span className='w-100'>주소</span>
              <span className='font-semibold'>{data.userAddr} {data.userAddrDetail}</span>
            </div>
          </div>
          <hr className='mb-20'/>
        </div>
        <div className='w-full'>
          <p className='text-16 font-extrabold mb-10'>직장 정보</p>
          <div className='my-15 flex flex-col space-y-3.5 text-14'>
            <div className='flex space-x-6'>
              <span className='w-100'>직업</span>
              <span className='font-semibold'>{data.jobName}</span>
            </div>
            <div className='flex space-x-6'>
              <span className='w-100'>직장명</span>
              <span className='font-semibold'>{data.companyName}</span>
            </div>
            <div className='flex space-x-6'>
              <span className='w-100'>주소</span>
              <span className='font-semibold'>{data.companyAddr}</span>
            </div>
            <div className='flex space-x-6'>
              <span className='w-100'>전화번호</span>
              <span className='font-semibold'>{data.companyPhone}</span>
            </div>
          </div>
          <hr className='mb-20' />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
