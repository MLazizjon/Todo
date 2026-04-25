import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  // LocalStorage-dan ma'lumotni yuklash
  const [sections, setSections] = useState(() => {
    const savedData = localStorage.getItem('todoSections');
    return savedData ? JSON.parse(savedData) : [{ id: Date.now(), items: [], inputValue: '' }];
  });

  // Ma'lumot o'zgarganda LocalStorage-ga saqlash
  useEffect(() => {
    localStorage.setItem('todoSections', JSON.stringify(sections));
  }, [sections]);

  // --- FUNKSIYALAR ---

  // 1. Yangi card (seksiya) yaratish
  const createNewSection = () => {
    setSections([...sections, { id: Date.now(), items: [], inputValue: '' }]);
  };

  // 2. Butun boshli cardni o'chirish
  const deleteSection = (sectionId) => {
    if (window.confirm("Ushbu kartani (va undagi barcha vazifalarni) o'chirib tashlamoqchimisiz?")) {
      setSections(sections.filter(sec => sec.id !== sectionId));
    }
  };

  // 3. Card ichidagi bitta vazifani o'chirish
  const deleteItem = (sectionId, itemId) => {
    if (window.confirm("Ushbu vazifani o'chirishni xohlaysizmi?")) {
      setSections(sections.map(sec => {
        if (sec.id === sectionId) {
          return {
            ...sec,
            items: sec.items.filter(item => item.id !== itemId)
          };
        }
        return sec;
      }));
    }
  };

  // 4. Input qiymatini o'zgartirish
  const handleInputChange = (sectionId, value) => {
    setSections(sections.map(sec => 
      sec.id === sectionId ? { ...sec, inputValue: value } : sec
    ));
  };

  // 5. Cardga yangi vazifa qo'shish
  const addItemToSection = (sectionId) => {
    setSections(sections.map(sec => {
      if (sec.id === sectionId && sec.inputValue.trim()) {
        const now = new Date();
        const dateString = now.toLocaleDateString('uz-UZ', {
          day: '2-digit', month: '2-digit', year: 'numeric'
        });
        
        const newItem = {
          id: Date.now(),
          text: sec.inputValue,
          time: dateString,
          status: 'none'
        };
        return { ...sec, items: [...sec.items, newItem], inputValue: '' };
      }
      return sec;
    }));
  };

  // 6. Vazifa statusini yangilash (checked/crossed)
  const updateStatus = (sectionId, itemId, newStatus) => {
    setSections(sections.map(sec => {
      if (sec.id === sectionId) {
        return {
          ...sec,
          items: sec.items.map(item => 
            item.id === itemId ? { ...item, status: item.status === newStatus ? 'none' : newStatus } : item
          )
        };
      }
      return sec;
    }));
  };

  // 7. Vazifa matnini tahrirlash
  const editItem = (sectionId, itemId) => {
    const section = sections.find(s => s.id === sectionId);
    const item = section.items.find(i => i.id === itemId);
    const newText = prompt("Matnni tahrirlang:", item.text);
    
    if (newText !== null && newText.trim() !== "") {
      setSections(sections.map(sec => {
        if (sec.id === sectionId) {
          return {
            ...sec,
            items: sec.items.map(i => i.id === itemId ? { ...i, text: newText } : i)
          };
        }
        return sec;
      }));
    }
  };

  // 8. Barcha cardlarni tozalash
  const deleteAll = () => {
    if(window.confirm("Barcha kartalarni butunlay o'chirib tashlamoqchimisiz?")) {
      setSections([{ id: Date.now(), items: [], inputValue: '' }]);
    }
  };

  return (
    <TodoContext.Provider value={{ 
      sections, 
      createNewSection, 
      deleteSection, 
      deleteItem,    // Valuega qo'shildi
      handleInputChange, 
      addItemToSection, 
      updateStatus, 
      editItem, 
      deleteAll 
    }}>
      {children}
    </TodoContext.Provider>
  );
};