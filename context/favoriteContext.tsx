"use client";

import { createContext, ReactNode, useState } from "react";

type FavoriteType = {
    ids: Array<string>,
    addFavoriteMeal: (id: string) => void,
    removeFavoriteMeal: (id: string) => void
}

export const FavoriteContext = createContext<FavoriteType>({
    ids: [],
    addFavoriteMeal: (id: string) => { },
    removeFavoriteMeal: (id: string) => { }
});

const FavoriteContextProvider = ({ children }: { children: ReactNode }) => {
    const [favoriteMeals, setFavoriteMeals] = useState<Array<string>>([]);
    const addFavoriteMeal = (id: string) => setFavoriteMeals(prev => [...prev, id]);
    const removeFavoriteMeal = (id: string) => setFavoriteMeals(prev => prev.filter(currId => currId !== id));
    const value = {
        ids: favoriteMeals,
        addFavoriteMeal,
        removeFavoriteMeal
    }

    return (
        <FavoriteContext.Provider
            value={value}
        >
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContextProvider;