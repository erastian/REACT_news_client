import React, { createContext, useContext, useMemo } from "react";


interface StoreProviderProps {
  children: React.ReactNode;
}

export interface StoreInterface {

}

const Store = createContext<StoreInterface>({} as StoreInterface);

export function StoreProvider({children}: StoreProviderProps) {


  const memoValues: StoreInterface = useMemo(
      () => ({

      }), []
  )

  return <Store.Provider value={memoValues}>{ children }</Store.Provider>
}


export default function useStore() {
  return useContext(Store);
}