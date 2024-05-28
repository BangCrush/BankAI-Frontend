import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const HeaderBar = ({text}) => {
  return (
      <div className='w-full h-64 py-23 relative bg-white'>
        <ArrowBackIosIcon className='absolute left-10'></ArrowBackIosIcon>
        <p className='text-15 text-center'>{text}</p>
    </div>
  );
};

export default HeaderBar;
