// Alex Olson | alexko22222@gmail.com
// App.tsx

// imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// main app wrapper component w/ routing
const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Future pages which I might add? */}
            </Routes>
        </Router>
    );
};

// export
export default App;
