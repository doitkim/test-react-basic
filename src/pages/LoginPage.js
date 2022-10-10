import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Category.css";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChangeUserId = (e) => {
    setId(e.target.value);
  };

  const onChangeUserPW = (e) => {
    setPw(e.target.value);
  };

  const onCheckInfo = () => {
    if (
      id === localStorage.getItem("userId") &&
      pw === localStorage.getItem("userPw")
    ) {
      window.location.assign("./Home");
    } else {
      alert("회원정보가 맞지 않습니다");
    }
  };
  return (
    <div className="LoginLayout">
      <label htmlFor="id">아이디: </label>
      <input onChange={onChangeUserId} id="userId" type="text" />
      <br />
      <label htmlFor="password">비밀번호: </label>
      <input onChange={onChangeUserPW} id="password" type="password" />
      <button>
        <Link to="/join" style={{ textDecoration: "none", color: "black" }}>
          회원가입
        </Link>
      </button>
      <button onClick={onCheckInfo}>로그인</button>
    </div>
  );
};

export default LoginPage;
