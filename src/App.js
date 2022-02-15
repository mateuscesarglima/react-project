import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import NewProject from "./pages/NewProject";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import Container from "./layouts/Container";
import Project from "./pages/Projects";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="company" element={<Company />} />
          <Route exact path="project" element={<Project />} />
          <Route exact path="newProject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
