import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import IntermediatePage from './pages/IntermediatePage';
import Footer from './components/Footer';

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<IntermediatePage />} />
        </Routes>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  )
}

export default App;
