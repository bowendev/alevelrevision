import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import SubjectDetail from './pages/SubjectDetail';
import Tutors from './pages/Tutors';
import Contact from './pages/Contact';
import ChemistryQuiz from './pages/ChemistryQuiz';
import './App.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/subjects/:subjectId" element={<SubjectDetail />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quiz/chemistry" element={<ChemistryQuiz />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
