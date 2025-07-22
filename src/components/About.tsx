import { useEffect, useState } from 'react';
import '../styles/About.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

const About = () => {
  const [data, setData] = useState<Post[]>([]);
  const [visibleItems, setVisibleItems] = useState(12);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  const handleShowMore = () => {
    setVisibleItems(prev => prev + 12);
  };

  return (
    <div>
      <div className="grid-container">
        {data.slice(0, visibleItems).map(item => (
          <div key={item.id} className="grid-item">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      {visibleItems < data.length && (
        <button onClick={handleShowMore}>Show more</button>
      )}
    </div>
  );
};

export default About;
