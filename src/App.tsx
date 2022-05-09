import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import SignIn from "./pages/SignIn";
import GlobalStyle from "./styles/global.style";
import Reset from "./styles/reset.style";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import TransferPage from "./pages/TransferPage";
import SecureRoute from "./services/SecureRoute";

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Reset />
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                        path="/home"
                        element={
                            <SecureRoute>
                                <Home />
                            </SecureRoute>
                        }
                    />
                    <Route
                        path="/entrada"
                        element={
                            <SecureRoute>
                                <TransferPage type={1} />
                            </SecureRoute>
                        }
                    />
                    <Route
                        path="/saida"
                        element={
                            <SecureRoute>
                                {" "}
                                <TransferPage type={-1} />{" "}
                            </SecureRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
