import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/items/')
      .then(res => res.json())
      .then(setData);
  }, []);

  return <div>{data ? JSON.stringify(data) : 'Загрузка...'}</div>;
}

export default App
