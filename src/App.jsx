import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Trainings from "./pages/Trainings";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
    return (
        <>
            <Router>
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/works" element={<Works />} />
                        <Route path="/trainings" element={<Trainings />} />
                        <Route path="/experiences" element={<Experiences />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <Footer />
            </Router>
        </>
    );
}

export default App;
