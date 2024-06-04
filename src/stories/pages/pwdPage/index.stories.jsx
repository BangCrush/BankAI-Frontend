import store from "libs/store";

import { Provider } from "react-redux";
import PwdPage from ".";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default {
  component: PwdPage,
  title: "pages/pwdPage",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = ()=>{
  let options = "toolbar=no,scrollbars=no,resizable=no,status=no,menubar=no,width=400, height=540, top=200,left=200";
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
    window.open("http://localhost:3001/password","_blank",options)
  }}>
    hi
</button>)
};