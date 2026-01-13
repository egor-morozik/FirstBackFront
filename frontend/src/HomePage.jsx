import { useState, useEffect } from 'react'

function HomePage() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/items/')
      .then(res => res.json())
      .then(setData)
      .catch(error => {
        console.error('Ошибка загрузки данных:', error)
        setData({ error: 'Не удалось загрузить данные' })
      })
  }, [])

  return (
    <div>
      <h1>Домашняя страница</h1>
      <div style={{ marginTop: '20px' }}>
        {data ? JSON.stringify(data) : 'Загрузка...'}
      </div>
    </div>
  )
}

export default HomePage