import { useState } from "react";
import PwdLine from "stories/molecules/pwdLine";



const PwdKeyboard = ({input,setInput}) => {  
  const [numbers, setNumbers] = useState([0,1,2,3,4,5,6,7,8,9].sort(() => Math.random() - 0.5))
  const onClick = (num)=>{
    if(num>-1){
      if(input.length===4) return
      setInput(input+num)
      setNumbers([0,1,2,3,4,5,6,7,8,9].sort(() => Math.random() - 0.5))
    }else if (num===-1){
      setInput(input.slice(0,-1))
    }
    else{
      setInput('')
    }
  }
  return (
    <div
      className={`p-20 mx-auto`}
    >
        <PwdLine onClick={onClick} numbers={[numbers[0],numbers[1],numbers[2]]} />
        <PwdLine onClick={onClick} numbers={[numbers[3],numbers[4],numbers[5]]} />
        <PwdLine onClick={onClick} numbers={[numbers[6],numbers[7],numbers[8]]} />
        <PwdLine onClick={onClick} numbers={[-2,numbers[9],-1]} />
    </div>
  );
};

export default PwdKeyboard;
