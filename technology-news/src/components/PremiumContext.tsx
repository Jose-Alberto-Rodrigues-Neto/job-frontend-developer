import React, { createContext, useContext, useState } from "react";

interface PremiumContextProps {
    isPremium: boolean;
    setIsPremium: React.Dispatch<React.SetStateAction<boolean>>;
}

const PremiumContext = createContext<PremiumContextProps | undefined>(undefined);

export const PremiumProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isPremium, setIsPremium] = useState<boolean>(false);

    return (
        <PremiumContext.Provider value={{ isPremium, setIsPremium }}>
            {children}
        </PremiumContext.Provider>
    );
};

export const usePremium = () => {
    const context = useContext(PremiumContext);
    if (!context) {
        throw new Error("usePremium deve ser usado dentro de um PremiumProvider");
    }
    return context;
};
