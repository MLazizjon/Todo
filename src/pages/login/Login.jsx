import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './login.styles';

const Login = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim()) {
      // Ismni vaqtinchalik localStorage-ga saqlaymiz (yoki App.js orqali uzatamiz)
      localStorage.setItem('userName', name);
      navigate('/home');
    }
  };

  return (
    <S.LoginContainer>
      <S.Modal>
        <S.Title>Ismingizni kiriting</S.Title>
        <S.Input 
          placeholder="Ismingiz..." 
          onChange={(e) => setName(e.target.value)}
        />
        <S.LoginButton onClick={handleLogin}>Kirish</S.LoginButton>
      </S.Modal>
    </S.LoginContainer>
  );
};

export default Login;