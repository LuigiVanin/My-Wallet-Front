import { createContext, useEffect, useState } from "react";
import { IAuthContext, IUser, Props } from "../helpers/interfaces";
import api from "../services/api";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const localToken = localStorage.getItem("token");
        // console.log("USE EFFECT DO APP");
        if (localToken) {
            // console.log("App provider effect");
            setToken(localToken);
            const config = {
                headers: {
                    Authentication: `Bearer ${localToken}`,
                },
            };
            const promise = api.get("/user", config);
            promise.then((response) => {
                // console.log(response);
                setUser({
                    name: response.data.name,
                    email: response.data.email,
                });
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, token, setUser, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
