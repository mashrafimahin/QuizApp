// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// component
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

// styles
import GlobalStyle from "./Style/Global.Style";

// pages
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Dashboard from "./Page/Dashboard";
import Courses from "./Page/Courses";
import Content from "./Page/Content";
import Preview from "./Page/Preview";
import Quiz from "./Page/Quiz";
import Result from "./Page/Result";
import Support from "./Page/Support";
import Policy from "./Page/Policy";
import Terms from "./Page/Terms";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/course/:id" element={<Content />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/preview/:id" element={<Preview />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/result/:id" element={<Result />} />
          <Route path="/help&support" element={<Support />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/terms&service" element={<Terms />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
