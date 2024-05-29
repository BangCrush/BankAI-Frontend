import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const BlueHeaderBar = ({text}) => {
  return (
      <div className='w-full h-64 py-23 relative bg-sub-color'>
        <ArrowBackIosIcon className='absolute left-10'></ArrowBackIosIcon>
        <p className='text-15 text-center font-extrabold'>{text}</p>
        <MoreHorizIcon className='absolute right-10 bottom-5 text-main-color'></MoreHorizIcon>
    </div>
  );
};

export default BlueHeaderBar;
