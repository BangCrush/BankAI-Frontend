import store from "libs/store";

import { Provider } from "react-redux";
import PwdPage from ".";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { PwdWindowOptions } from "constants/password";

export default {
  component: PwdPage,
  title: "pages/pwdPage",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = ()=>{
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.pwd) {
        //pwd 제출 로직
        console.log(event.data.pwd);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (<button type="button" className="btn" onClick={()=>{
    window.open("http://localhost:3001/password?type=single","_blank",PwdWindowOptions)
  }}>
    PwdPopUP
</button>)
};
