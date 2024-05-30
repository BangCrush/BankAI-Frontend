const Title = ({ text1, text2 }) => {
  return (
    <div className="whitespace-pre-wrap	text-20 font-semibold p-10 mt-10">
      <div>
        {text1}
        <br />
        {text2}
      </div>
    </div>
  );
};

export default Title;
