import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-color: #f0f2f5; /* Fonni biroz yumshatdik */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Mobil ekranlarda chekkalarga yopishib qolmasligi uchun */
`;

export const Modal = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 102, 255, 0.2);
  
  /* Responsiv kenglik */
  width: 100%;
  max-width: 400px; /* Eng katta holati */
  min-width: 260px; /* Eng kichik holati */

  /* Ekran 1300px dan kichrayganda ichki bo'shliqlar ham kichrayadi */
  @media (max-width: 1300px) {
    padding: 30px;
    max-width: 350px;
  }

  @media (max-width: 600px) {
    padding: 25px;
    border-radius: 12px;
  }

  @media (max-width: 400px) {
    padding: 20px;
  }
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 25px;
  font-size: 24px;
  transition: font-size 0.3s ease;

  /* Ekran kichrayganda shrift o'lchami o'zgarishi */
  @media (max-width: 1300px) {
    font-size: 22px;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media (max-width: 350px) {
    font-size: 18px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 20px;
  border: 2px solid #0066ff;
  border-radius: 10px;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #0044cc;
    box-shadow: 0 0 8px rgba(0, 102, 255, 0.2);
  }

  @media (max-width: 1300px) {
    padding: 12px;
    font-size: 15px;
  }

  @media (max-width: 600px) {
    padding: 10px;
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #0066ff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background 0.3s ease, transform 0.1s active;

  &:hover {
    background-color: #0052cc;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 1300px) {
    padding: 12px;
    font-size: 15px;
  }

  @media (max-width: 600px) {
    padding: 10px;
    font-size: 14px;
  }
`;