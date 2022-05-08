import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import SignIn from "./pages/SignIn";
import GlobalStyle from "./styles/global.style";
import Reset from "./styles/reset.style";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import TransferPage from "./pages/TransferPage";

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Reset />
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route
                        path="/entrada"
                        element={<TransferPage type={1} />}
                    />
                    <Route path="/saida" element={<TransferPage type={-1} />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
