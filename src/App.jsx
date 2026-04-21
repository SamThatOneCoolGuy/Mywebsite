import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider'
import { Layout } from './layout/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Tools } from './pages/Tools'

const UNDER_MAINTENANCE = true

function MaintenanceScreen() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-zinc-950 text-zinc-100">
      <p className="text-2xl font-medium">بيتم تحويل الموثع الا شي افضل ومحسن  April 30</p>
    </div>
  )
}

export default function App() {
  if (UNDER_MAINTENANCE) {
    return <MaintenanceScreen />
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
