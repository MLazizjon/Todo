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

  // FUNKSIYALAR
  const createNewSection = () => {
    setSections([...sections, { id: Date.now(), items: [], inputValue: '' }]);
  };

  const handleInputChange = (sectionId, value) => {
    setSections(sections.map(sec => 
      sec.id === sectionId ? { ...sec, inputValue: value } : sec
    ));
  };

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

  const deleteAll = () => {
    if(window.confirm("Barcha kartalarni o'chirib tashlamoqchimisiz?")) {
      setSections([{ id: Date.now(), items: [], inputValue: '' }]);
    }
  };

  return (
    <TodoContext.Provider value={{ 
      sections, createNewSection, handleInputChange, 
      addItemToSection, updateStatus, editItem, deleteAll 
    }}>
      {children}
    </TodoContext.Provider>
  );
};