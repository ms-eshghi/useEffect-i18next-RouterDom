import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import MyContainer from './components/MyContainer';
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MyContainer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
