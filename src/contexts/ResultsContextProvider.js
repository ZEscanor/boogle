import React, {createContext, useContext, useState} from "react";

const ResultContext = createContext();


const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
const [results, setResults] =useState([]);
const [isLoading, setIsLoading] = useState(false);
const [searchTerm, setSearchTerm] = useState('');


const getResults = async (url) => {
   setIsLoading(true);

   const response = await fetch( `${baseUrl}${url}`,
   {
    method: 'GET',
    headers: {
    'X-User-Agent': 'desktop',
    'X-Proxy-Location': 'US',
    'X-RapidAPI-Key': 'da2f5c20a9mshcb4417ddfbd67a9p1cebfcjsn0c027f614ba7',
    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
    }
   });

   const data = await response.json()

   setResults(data);
   setIsLoading(false);

}
return (
    <ResultContext.Provider value={{getResults,
        results,
        searchTerm,
    setSearchTerm,
    isLoading
    
    }}>
      {children}
    </ResultContext.Provider>
)
}

export const useResultContext = () => useContext(ResultContext) 