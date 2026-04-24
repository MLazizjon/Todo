import styled from 'styled-components';

export const HomeWrapper = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 600px) {
    padding: 20px 10px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 850px;
  margin-bottom: 30px;
  background: #fff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);

  @media (max-width: 600px) {
    padding: 15px;
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

export const UserName = styled.h2`
  margin: 0;
  font-size: clamp(18px, 4vw, 24px); /* Shrift ekran o'lchamiga qarab o'zgaradi */
  span { color: #0066ff; font-weight: 800; }
`;

export const NewCardBtn = styled.button`
  background-color: #0066ff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: bold;
  font-size: clamp(13px, 3vw, 15px);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s;
  white-space: nowrap;

  &:hover { background-color: #0044cc; transform: translateY(-2px); }

  @media (max-width: 400px) {
    width: 100%;
    justify-content: center;
  }
`;

export const SectionBox = styled.div`
  background: #ffffff;
  width: 100%;
  max-width: 850px;
  padding: clamp(15px, 4vw, 30px);
  border-radius: 20px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid #ececec;
  box-sizing: border-box;
`;

export const InputSection = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 25px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 15px;
  border: 2px solid #eee;
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  transition: 0.2s;
  width: 100%;
  box-sizing: border-box;
  &:focus { border-color: #0066ff; background: #fafafa; }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CardItem = styled.div`
  background-color: #fcfcfc;
  border: 1px solid #efefef;
  padding: clamp(10px, 3vw, 18px);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  transition: 0.2s;

  &:hover { border-color: #0066ff; }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(8px, 2vw, 15px);
  flex: 1;
  width: 100%;

  .item-text {
    font-size: clamp(14px, 3.5vw, 17px);
    font-weight: 500;
    word-break: break-word; /* Uzun so'zlar sig'ishi uchun */
  }

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`;

export const TimeText = styled.span`
  color: #777;
  font-size: clamp(11px, 2.5vw, 13px);
  background: #eee;
  padding: 4px 10px;
  border-radius: 6px;
  font-family: monospace;
  white-space: nowrap;

  @media (max-width: 650px) {
    margin-left: auto; /* Mobil holatda o'ngga suriladi */
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  gap: clamp(10px, 2vw, 15px);
  align-items: center;

  @media (max-width: 650px) {
    width: 100%;
    justify-content: flex-end;
    border-top: 1px solid #eee;
    padding-top: 10px;
  }

  svg {
    cursor: pointer;
    font-size: clamp(20px, 5vw, 24px) !important;
    padding: 8px;
    border-radius: 8px;
    transition: 0.2s;
    
    &:hover { 
      background: #f0f0f0; 
      transform: scale(1.1);
    }
  }
`;

export const FooterAction = styled.div`
  width: 100%;
  max-width: 850px;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const DeleteAllBtn = styled.button`
  background-color: #ff3333;
  color: white;
  border: none;
  padding: 14px 25px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  font-size: clamp(14px, 3vw, 16px);
  width: auto;

  @media (max-width: 400px) {
    width: 100%;
  }

  &:hover { background-color: #cc0000; }
`;