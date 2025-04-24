import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'


function App() {

  return (
    <>
    <h1>jhi</h1>
    <h2>Me</h2>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
