import store from "libs/store";

import { Provider } from "react-redux";
import BottomSheet from ".";
import PwdPage from "stories/pages/pwdPage";
import { useState } from "react";

export default {
  component: BottomSheet,
  title: "organisms/BottomSheet",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'BottomSheet가 열려있는지 여부를 결정',
      defaultValue: false,
    },
    setOpen: {
      action: 'clicked',
      description: 'BottomSheet를 열거나 닫는 함수',
    },
    page: {
        action: 'clicked',
        description: 'BottomSheet에 포함될 내용을 담는 페이지',
      },
  },
};

export const Default =(args)=> {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    return(
        <div>
            <button onClick={handleOpen}>✔</button>
            <BottomSheet open={open} setOpen={setOpen} page={args.page}/>
        </div>
    
    )
};
Default.args={
    page:<PwdPage/>
}
