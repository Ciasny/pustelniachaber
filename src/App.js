import { useState } from "react";
// Main Components
import Footer from "./Components/Main/Footer";
import NavBar from "./Components/Main/NavBar";

// Pages
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import GalleryPage from "./Pages/GalleryPage";


function App() {

  const [currentPage, setCurrentPage] = useState({ title: 'HomePage', data: '' })

  function renderPage() {
    switch (currentPage.title) {
      case 'HomePage':
        return <HomePage setPage={setCurrentPage} />
      case 'GalleryPage':
        return <GalleryPage setPage={setCurrentPage} currentPage={currentPage} />
      default:
        return <NotFoundPage />
    }
  }

  return (
    <>
      <NavBar setPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
