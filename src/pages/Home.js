import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Category.css";

const Home = () => {
  const [isLoggedIn, isSetLoggedIn] = useState(false);
  const [visible, setVisible] = useState(false);
  const Logout = () => {
    isSetLoggedIn(!isLoggedIn);
  };

  const UserInfo = () => {
    return (
      <div id="userInfo">
        <h3>회원 정보</h3>
        <div>아이디 : {localStorage.getItem("userId")}</div>
        <div>비밀번호 : {localStorage.getItem("userPw")}</div>
        <div>이름 : {localStorage.getItem("userName")}</div>
        <div>생년월일 : {localStorage.getItem("userBirth")}</div>
      </div>
    );
  };

  const onVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <span id="greeting">
        {localStorage.getItem("userName") !== null && !isLoggedIn ? (
          <>
            {localStorage.getItem("userName") + "님어서오세요"}
            <button onClick={Logout}>로그아웃</button>
            <button onClick={onVisible}>회원 정보</button>

            {visible ? <UserInfo /> : <></>}
          </>
        ) : (
          <Link to="/">메인</Link>
        )}
      </span>
    </>
  );
};

export default Home;
