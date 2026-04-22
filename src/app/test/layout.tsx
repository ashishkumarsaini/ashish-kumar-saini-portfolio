import { FC, ReactNode } from "react";
import { Header } from "../../components/header/header";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout;