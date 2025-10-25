import { createContext } from "react";

const AuthContext = createContext(null);
const PlantsDataContext = createContext(null);
const LoadingContext = createContext(false)
export { AuthContext, PlantsDataContext, LoadingContext };