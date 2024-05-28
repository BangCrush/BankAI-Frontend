import PwdLine from "stories/molecules/pwdLine";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const PwdKeyboard = () => {
    numbers = numbers.sort(() => Math.random() - 0.5);
  return (
    <div
      className={`p-20 mx-auto`}
    >
        <PwdLine numbers={[numbers[0],numbers[1],numbers[2]]} />
        <PwdLine numbers={[numbers[3],numbers[4],numbers[5]]} />
        <PwdLine numbers={[numbers[6],numbers[7],numbers[8]]} />
        <PwdLine numbers={[-2,numbers[9],-1]} />
    </div>
  );
};

export default PwdKeyboard;
