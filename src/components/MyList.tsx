import React from "react";

type TItem = {
  id: string;
  text: string;
  clicked?: boolean;
};

interface ListProps {
  header: string;
  items: TItem[];
  updateList: (id: string) => void;
}

const MyList: React.FC<ListProps> = ({ header, items, updateList }) => {
  return (
    <div>
      <h2>{header}</h2>
      <ol>
        {items.map((item) => (
          <li
            key={item.id}
            role="listitem"
            onClick={() => updateList(item.id)}
            style={item.clicked ? { textDecoration: 'line-through' } : {}}
            
          >
            {item.text}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyList;
