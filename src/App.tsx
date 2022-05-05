import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import SignIn from "./pages/SignIn";
import GlobalStyle from "./styles/global.style";
import Reset from "./styles/reset.style";

const App: React.FC = () => {
    return (
        <>
            <Reset />
            <GlobalStyle />
            <SignIn />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
