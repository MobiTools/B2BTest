import React, { createContext, useState, useEffect, useContext } from "react";
import { handleGetArticles, handleGetServices } from "../utils/realtimeUtils";

export const DatabaseContext = createContext({
  articles: [],
  setArticles: () => {},
  services: [],
  setServices: () => {},
  isLoading: false,
});

export const DatabaseProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [services, setServices] = useState([]);

  const [isLoading, setIsLoading] = React.useState(false);

  const handleArticles = async () => {
    setIsLoading(true);
    const articlesDB = await handleGetArticles();

    if (articlesDB) {
      setArticles([...articlesDB]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      // Handle the case where articlesDB is undefined
      // For example, display an error message or take appropriate action
    }
  };
  const handleServices = async () => {
    setIsLoading(true);
    const servicesDB = await handleGetServices();

    if (servicesDB) {
      setServices([...servicesDB]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      // Handle the case where servicesDB is undefined
      // For example, display an error message or take appropriate action
    }
  };

  React.useEffect(() => {
    handleArticles();
    handleServices();
  }, []);

  return (
    <DatabaseContext.Provider
      value={{ articles, setArticles, services, setArticles, isLoading }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

export function useDatabase() {
  const context = useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
