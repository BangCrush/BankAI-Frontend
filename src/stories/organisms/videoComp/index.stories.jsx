import store from 'libs/store';


import { Provider } from 'react-redux';
import VideoComp from '.';
import { useState } from 'react';
import Input from 'stories/atoms/input';

export default {
  component: VideoComp,
  title: 'organisms/videoComp',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
};

export const Default = ()=>{
  
  return <>
    <VideoComp classes={'absolute'} />
    
  </>
}
