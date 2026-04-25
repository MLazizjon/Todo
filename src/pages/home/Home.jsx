import React, { useContext } from 'react';
import * as S from './Home.styles';
import { TodoContext } from '../../context/Provider'; 
import { FiEdit, FiCheck, FiX, FiPlus, FiTrash2 } from 'react-icons/fi';

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
    deleteItem,    // Vazifani o'chirish funksiyasi
    deleteSection, // Cardni o'chirish funksiyasi
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
          {/* Card Sarlavhasi va Butun Cardni o'chirish tugmasi */}
          <S.CardHeader>
            <S.CardTitle>Vazifalar Bloki</S.CardTitle>
            <S.DeleteCardBtn onClick={() => deleteSection(section.id)}>
              <FiTrash2 size={16} /> Delete Card
            </S.DeleteCardBtn>
          </S.CardHeader>

          {/* Input qismi */}
          <S.InputSection>
            <S.StyledInput
              value={section.inputValue || ""}
              onChange={(e) => handleInputChange(section.id, e.target.value)}
              placeholder="Nima reja qildingiz?"
              onKeyPress={(e) => e.key === 'Enter' && addItemToSection(section.id)}
            />
            <S.EnterBtn onClick={() => addItemToSection(section.id)}>
              Enter
            </S.EnterBtn>
          </S.InputSection>

          {/* Seksiya ichidagi vazifalar ro'yxati */}
          <S.ListContainer>
            {section.items.map((item) => (
              <S.CardItem key={item.id}>
                <S.CardContent>
                  {/* Status belgilari (Check yoki X) */}
                  {item.status === 'checked' && (
                    <FiCheck color="#28a745" size={24} strokeWidth={3} />
                  )}
                  {item.status === 'crossed' && (
                    <FiX color="#dc3545" size={24} strokeWidth={3} />
                  )}

                  {/* Vazifa matni */}
                  <span
                    className="item-text"
                    style={{
                      textDecoration: item.status === 'checked' ? 'line-through' : 'none',
                      color: item.status === 'crossed' ? '#dc3545' : '#333',
                      opacity: item.status === 'checked' ? 0.6 : 1,
                      fontSize: '18px',
                      fontWeight: '500',
                      marginLeft: (item.status === 'none') ? '0px' : '8px'
                    }}
                  >
                    {item.text}
                  </span>

                  {/* Sana belgisi */}
                  <S.TimeText>📅 {item.time}</S.TimeText>
                </S.CardContent>

                {/* Boshqaruv tugmalari (Iconkalar) */}
                <S.CheckboxGroup>
                  <FiCheck
                    title="Bajarildi"
                    onClick={() => updateStatus(section.id, item.id, 'checked')}
                    style={{ color: '#28a745', fontSize: '28px' }}
                  />
                  <FiX
                    title="Xatolik"
                    onClick={() => updateStatus(section.id, item.id, 'crossed')}
                    style={{ color: '#dc3545', fontSize: '28px' }}
                  />
                  <FiEdit
                    title="Tahrirlash"
                    onClick={() => editItem(section.id, item.id)}
                    style={{ color: '#0066ff', fontSize: '28px' }}
                  />
                  {/* Individual vazifani o'chirish tugmasi */}
                  <FiTrash2
                    title="Vazifani o'chirish"
                    onClick={() => deleteItem(section.id, item.id)}
                    style={{ color: '#ff3333', fontSize: '28px' }}
                  />
                </S.CheckboxGroup>
              </S.CardItem>
            ))}
          </S.ListContainer>
        </S.SectionBox>
      ))}

      {/* Agar kartalar bo'lsa, hammasini o'chirish tugmasi */}
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