const ProdDetailItem = ({ title, content }) => {
  return (
    <div className="max-w-560">
      <p className="text-16 font-semibold">{title}</p>
      <p className="text-13">{content}</p>
    </div>
  );
};

export default ProdDetailItem;
