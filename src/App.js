import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import Container from "./components/layouts/Container";
import Project from "./components/pages/Projects";

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
