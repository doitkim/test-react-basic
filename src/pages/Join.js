import "../components/Category.css";

const Join = () => {
  const onComplete = (e) => {
    e.preventDefault();
    const userId = document.getElementById("userId").value;
    const userPw = document.getElementById("userPassword").value;
    const userName = document.getElementById("userName").value;
    const userBirth = document.getElementById("userBirth").value;
    localStorage.setItem("userId", userId);
    localStorage.setItem("userPw", userPw);
    localStorage.setItem("userName", userName);
    localStorage.setItem("userBirth", userBirth);
    window.location.assign("/Home");
  };

  const onCancel = (e) => {
    e.preventDefault();

    window.location.assign("/");
  };
  return (
    <form id="joinForm">
      <label htmlFor="id">아이디 : </label>
      <input id="userId" type="text" />
      <br />
      <label htmlFor="userPassword">비밀번호 : </label>
      <input id="userPassword" type="password" />
      <label htmlFor="userName">이름 : </label>
      <input id="userName" type="text" />
      <br />
      <label htmlFor="userBirth">생년월일 : </label>
      <input id="userBirth" type="date" />
      <button onClick={onComplete}>작성 완료</button>
      <button onClick={onCancel} type="button">
        작성 취소
      </button>
    </form>
  );
};

export default Join;
