const ProdDetailItem = ({title, content}) => {
  return (
    <div className="max-w-560">
      <p className="text-14 font-semibold">{title}</p>
      <p className="text-12">{content}</p>
    </div>    
  );
};

export default ProdDetailItem;
