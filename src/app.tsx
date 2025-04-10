import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio3D from './components/Portfolio3D'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio3D />} />
        {/* Tambah route lain kalau ada */}
      </Routes>
    </BrowserRouter>
  )
}
