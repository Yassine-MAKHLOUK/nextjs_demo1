import { createContext, FC, ReactNode, useState } from "react";

interface AppState {
    user: null | string; //Adjust the type as needed
}

interface AppContextProps {
    state: AppState;
    setState: React.Dispatch<React.SetStateAction<AppState>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);
export const AppProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [state, setState] = useState<AppState>({user: null});

    return(
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    );
}
