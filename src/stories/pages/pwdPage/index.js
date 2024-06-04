import { useEffect, useState } from 'react';
import HeaderBar from 'stories/molecules/headerBar';
import PwdDots from 'stories/molecules/pwdDots';
import PwdKeyboard from 'stories/organisms/pwdKeyboard';

const PwdPage = () => {
  const [pwd,setPwd] = useState('')
  useEffect(()=>{
    if(pwd.length === 4){
      console.log(pwd);
      window.opener.postMessage({pwd},"*");
      window.close();
    }
  },[pwd])
  return (
    <div className='w-400 flex flex-col gap-20 border p-20'>
        <h2 className='text-20 font-bold p-20 mx-auto'>비밀번호를 입력해 주세요</h2>
        <PwdDots input={pwd}/>
        <PwdKeyboard input={pwd} setInput={setPwd}/>
    </div>
  );
};

export default PwdPage;
