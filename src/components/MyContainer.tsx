import React, { useState } from "react";
import MyList from "./MyList";
import { v4 as uuidv4 } from 'uuid'; 

type TItem = {
  id: string;
  text: string;
  clicked?: boolean;
};

const MyContainer: React.FC = () => {
  const [items, setItems] = useState<TItem[]>([
    { id: "1", text: "Learn React", clicked: false },
    { id: "2", text: "Do Assignment", clicked: false },
  ]);

  const [newText, setNewText] = useState("");

  const addItem = () => {
    if (newText.trim()) {
      const newItem: TItem = {
        id: uuidv4(),
        text: newText,
        clicked: false,
      };
      setItems([...items, newItem]);
      setNewText("");
    }
  };

  const updateList = (id: string) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, clicked: !item.clicked } : item
    );
    setItems(updated);
  };

  return (
    <div>
      <textarea value={newText} onChange={(e) => setNewText(e.target.value)} />
      <button onClick={addItem}>Add Item</button>
      <MyList header="My Tasks" items={items} updateList={updateList} />
    </div>
  );
};

export default MyContainer;
