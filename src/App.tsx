import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import SignIn from "./pages/SignIn";
import GlobalStyle from "./styles/global.style";
import Reset from "./styles/reset.style";
import SignUp from "./pages/SignUp";

const App: React.FC = () => {
    return (
        <>
            <Reset />
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
