import { BrowserRouter, Routes, Route } from 'react-router'
import Obrigatorias from '../pages/obrigatories'
import ShiftSelector from '../pages/shiftSelector/ShiftSelector'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/obrigatorias" element={<Obrigatorias/>} />
        <Route path="/turnos" element={<ShiftSelector/>} />
      </Routes>
    </BrowserRouter>
  )
}
