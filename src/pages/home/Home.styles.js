import styled from 'styled-components';

// Ranglar o'zgaruvchilari
const colors = {
  primary: '#0066ff',
  primaryHover: '#0044cc',
  danger: '#ff3333',
  dangerHover: '#cc0000',
  lightGray: '#f5f5f5',
  white: '#ffffff',
  border: '#eee'
};

export const HomeWrapper = styled.div`
  background-color: ${colors.lightGray};
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
  background: ${colors.white};
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

export const UserName = styled.h2`
  margin: 0;
  font-size: clamp(18px, 4vw, 24px);
  span { color: ${colors.primary}; font-weight: 800; }
`;

// TUGMALAR UCHUN ASOSIY STIL (Base Button)
const BaseButton = styled.button`
  border: none;
  border-radius: 12px; /* Barcha tugmalarda bir xil radius */
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:active {
    transform: scale(0.98);
  }
`;

export const NewCardBtn = styled(BaseButton)`
  background-color: ${colors.primary};
  color: white;
  padding: 12px 20px;
  font-size: 15px;
  gap: 8px;
  &:hover { background-color: ${colors.primaryHover}; transform: translateY(-2px); }
  @media (max-width: 400px) { width: 100%; }
`;

// ENTER TUGMASI (500px dan pastda buzilmaydi)
export const EnterBtn = styled(BaseButton)`
  background-color: ${colors.primary};
  color: white;
  padding: 0 35px;
  height: 54px; /* Input balandligi bilan bir xil */
  font-size: 16px;
  &:hover { background-color: ${colors.primaryHover}; }

  @media (max-width: 500px) {
    width: 100%;
    height: 48px;
  }
`;

// HAR BIR CARD UCHUN ALOHIDA DELETE TUGMASI
export const DeleteCardBtn = styled(BaseButton)`
  background-color: ${colors.danger};
  color: white;
  padding: 8px 15px;
  font-size: 13px;
  gap: 6px;
  &:hover { background-color: ${colors.dangerHover}; }
`;

export const SectionBox = styled.div`
  background: ${colors.white};
  width: 100%;
  max-width: 850px;
  padding: clamp(15px, 4vw, 30px);
  border-radius: 20px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid #ececec;
  box-sizing: border-box;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px dashed #ddd;
  padding-bottom: 10px;
`;

export const CardTitle = styled.span`
  font-weight: 700;
  color: #555;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
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
  border: 2px solid ${colors.border};
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  height: 54px;
  box-sizing: border-box;
  transition: 0.2s;
  &:focus { border-color: ${colors.primary}; background: #fafafa; }
  @media (max-width: 500px) { height: 48px; }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CardItem = styled.div`
  background-color: #fcfcfc;
  border: 1px solid #efefef;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  transition: 0.2s;
  &:hover { border-color: ${colors.primary}; }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  width: 100%;
`;

export const TimeText = styled.span`
  color: #777;
  font-size: 12px;
  background: #eee;
  padding: 4px 10px;
  border-radius: 6px;
  margin-left: auto;
  white-space: nowrap;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 650px) {
    width: 100%;
    justify-content: flex-end;
    border-top: 1px solid ${colors.border};
    padding-top: 10px;
  }

  svg {
    cursor: pointer;
    font-size: 24px;
    padding: 5px;
    border-radius: 8px;
    transition: 0.2s;
    &:hover { background: #f0f0f0; transform: scale(1.1); }
  }
`;

export const FooterAction = styled.div`
  width: 100%;
  max-width: 850px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
  @media (max-width: 600px) { justify-content: center; }
`;

export const DeleteAllBtn = styled(BaseButton)`
  background-color: ${colors.danger};
  color: white;
  padding: 14px 28px;
  font-size: 16px;
  &:hover { background-color: ${colors.dangerHover}; }
  @media (max-width: 500px) { width: 100%; }
`;