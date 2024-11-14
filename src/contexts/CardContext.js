import { createContext, useContext } from "react";

// Create the context without initial hardcoded values
export const CardContext = createContext();

// Create a custom hook to use the context
export default function useCard() {
  return useContext(CardContext);
}

// Export the provider
export const CardProvider = CardContext.Provider;
