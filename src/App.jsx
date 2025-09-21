import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-1">
        <LandingPage />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  )
}

export default App;
