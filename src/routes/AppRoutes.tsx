import { BrowserRouter, Routes, Route } from 'react-router'
import Obrigatorias from '../pages/Obrigatorias'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/obrigatorias" element={<Obrigatorias/>} />
      </Routes>
    </BrowserRouter>
  )
}
