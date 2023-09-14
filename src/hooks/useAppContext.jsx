import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useAppContext = () => {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error("useAppContext debe usarse dentro de un proveedor AppContext")
    }

    return context
}