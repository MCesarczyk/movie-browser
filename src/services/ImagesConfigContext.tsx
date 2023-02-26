import { createContext, ReactNode } from "react";
import { ImagesConfiguration } from "./types";
import { useImagesConfigService } from "./imagesConfigService";

export const imagesConfigInitialValue = {
  baseUrl: "",
  posterSizes: [],
  profileSizes: [],
  backdropSizes: [],
};

export const ImagesConfigContext = createContext<ImagesConfiguration>(imagesConfigInitialValue);

interface ContextProviderProps {
  children: ReactNode;
};

export const ImagesConfigProvider = ({ children }: ContextProviderProps) => {
  const { baseUrl, posterSizes, profileSizes, backdropSizes } = useImagesConfigService(imagesConfigInitialValue);

  return (
    <ImagesConfigContext.Provider value={{ baseUrl, posterSizes, profileSizes, backdropSizes }}>
      {children}
    </ImagesConfigContext.Provider>
  );
};
