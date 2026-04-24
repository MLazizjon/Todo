import React, { useContext } from 'react';
import * as S from './Home.styles';
import { TodoContext } from '../../context/Provider'; // Yo'lni loyihangizga qarab tekshiring
import { FiEdit, FiCheck, FiX, FiPlus } from 'react-icons/fi';

const Home = () => {
  // LocalStorage dan foydalanuvchi ismini olish
  const savedName = localStorage.getItem('userName') || 'Mehmon';

  // TodoContext dan barcha kerakli ma'lumot va funksiyalarni olamiz
  const {
    sections,
    createNewSection,
    handleInputChange,
    addItemToSection,
    updateStatus,
    editItem,
    deleteAll
  } = useContext(TodoContext);

  return (
    <S.HomeWrapper>
      {/* Yuqori qism: Salomlashuv va Yangi Card qo'shish */}
      <S.HeaderSection>
        <S.UserName>Salom, <span>{savedName}</span></S.UserName>
        <S.NewCardBtn onClick={createNewSection}>
          <FiPlus size={22} /> New Card
        </S.NewCardBtn>
      </S.HeaderSection>

      {/* Har bir seksiya (Katta Card Box) uchun map */}
      {sections.map((section) => (
        <S.SectionBox key={section.id}>
          {/* Input qismi */}
          <S.InputSection>
            <S.StyledInput
              value={section.inputValue || ""}
              onChange={(e) => handleInputChange(section.id, e.target.value)}
              placeholder="Nima reja qildingiz?"
              onKeyPress={(e) => e.key === 'Enter' && addItemToSection(section.id)}
            />
            <S.NewCardBtn onClick={() => addItemToSection(section.id)} style={{ padding: '0 30px' }}>
              Enter
            </S.NewCardBtn>
          </S.InputSection>

          {/* Seksiya ichidagi elementlar ro'yxati */}
          <S.ListContainer>
            {section.items.map((item) => (
              <S.CardItem key={item.id}>
                <S.CardContent>
                  {/* Statusga qarab galochka yoki X chiqarish */}
                  {item.status === 'checked' && (
                    <FiCheck color="#28a745" size={20} strokeWidth={3} />
                  )}
                  {item.status === 'crossed' && (
                    <FiX color="#dc3545" size={20} strokeWidth={3} />
                  )}

                  {/* Matn qismi */}
                  <span
                    className="item-text"
                    style={{
                      textDecoration: item.status === 'checked' ? 'line-through' : 'none',
                      color: item.status === 'crossed' ? '#dc3545' : '#333',
                      opacity: item.status === 'checked' ? 0.6 : 1,
                      fontSize: '18px',
                      fontWeight: '500',
                      marginLeft: (item.status === 'none') ? '0px' : '5px'
                    }}
                  >
                    {item.text}
                  </span>

                  {/* Faqat Sana (Kun.Oy.Yil) */}
                  <S.TimeText>📅 {item.time}</S.TimeText>
                </S.CardContent>

                {/* Boshqaruv tugmalari (Iconkalar) */}
                <S.CheckboxGroup>
                  <FiCheck
                    title="Bajarildi"
                    onClick={() => updateStatus(section.id, item.id, 'checked')}
                    color="#28a745" size={35}
                  />
                  <FiX
                    title="Xatolik/Bekor qilish"
                    onClick={() => updateStatus(section.id, item.id, 'crossed')}
                    color="#dc3545" size={35}
                  />
                  <FiEdit
                    title="Tahrirlash"
                    onClick={() => editItem(section.id, item.id)}
                    color="#0066ff" size={35}
                  />
                </S.CheckboxGroup>
              </S.CardItem>
            ))}
          </S.ListContainer>
        </S.SectionBox>
      ))}

      {/* Agar seksiyalar bo'lsa, hammasini o'chirish tugmasi */}
      {sections.length > 0 && (
        <S.FooterAction>
          <S.DeleteAllBtn onClick={deleteAll}>
            Delete All Cards
          </S.DeleteAllBtn>
        </S.FooterAction>
      )}
    </S.HomeWrapper>
  );
};

export default Home;