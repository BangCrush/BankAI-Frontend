import ErrorIcon from "@mui/icons-material/Error";

const Warning = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center min-w-100 space-y-5">
      <ErrorIcon sx={{ fontSize: 50, color: "rgb(135, 133, 246)" }} />
      <div className="text-18 font-semibold">{title}</div>
      <div className="w-full h-2 bg-gray-border"></div>
      <div className="flex justify-between w-full text-gray-900">
        <div>사유</div>
        <div className="font-semibold">{subtitle}</div>
      </div>
    </div>
  );
};

export default Warning;
