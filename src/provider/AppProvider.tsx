import { Provider } from "@/components/ui/provider";
import { FC, ReactNode } from "react";

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default AppProvider;
