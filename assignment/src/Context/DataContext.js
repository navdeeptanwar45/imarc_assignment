// DataContext.js
import React, { createContext, useContext,useState} from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data,setData] =useState( []);

function deleteGraph(index){
const tempData=[...data]
    tempData.splice(index,1)
    setData(tempData)
}

  return (
    <DataContext.Provider value={{data,deleteGraph,setData}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
