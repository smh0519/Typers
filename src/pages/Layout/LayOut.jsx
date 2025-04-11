import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../moduls/login'; 

const LayOut = () => {

const dispatch = useDispatch();
// Redux store의 상태 중 'auth' 리듀서 안에 있는 'isLoggedIn' 값을 구독함
// 이 값이 변경되면 이 컴포넌트도 자동으로 리렌더링됨
const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

// 로그인 버튼 클릭 시 login 액션을 dispatch해서 상태를 true로 바꿈
const handleLogin = () => dispatch(login());

// 로그아웃 버튼 클릭 시 logout 액션을 dispatch해서 상태를 false로 바꿈
const handleLogout = () => dispatch(logout());

  return (
    <div style={{ padding: '20px' }}>
      <h2>{isLoggedIn ? '로그인 상태입니다' : '로그아웃 상태입니다'}</h2>
      <button onClick={handleLogin} disabled={isLoggedIn} style={{ marginRight: '10px' }}>
        로그인
      </button>
      <button onClick={handleLogout} disabled={!isLoggedIn}>
        로그아웃
      </button>
    </div>
  );
};

export default LayOut;
