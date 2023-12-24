import React, { createContext } from 'react';


const AuthContext2 = createContext()
const AuthProvider2 = ({children}) => {

    const userInfo = {
        name : "Hasibur Rahman Safin"
    }
    return (
        <AuthContext2.Provider >
            {children}
        </AuthContext2.Provider>
    );
};

export default AuthProvider2;