import './App.css';
import HomePage from './pages/home/HomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
// import GalleryPage from '/pages/gallery/GalleryPage';
// import BlogPage from '/pages/Blog/BolgPage';
// import MyStoryPage from '.pages/MyStory/MyStoryPage';
import AboutMePage from './pages/aboutMe/AboutMePage';

function App() {
  return (
    <BrowserRouter basename="/mysit3">
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutMePage />} />
            {/* <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/my-story" element={<MyStoryPage />} /> */}
          </Routes>
          <footer className="app-footer">
            <Footer />
          </footer>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
