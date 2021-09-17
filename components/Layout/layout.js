

import AppBar from "../AppBar";
import DrawerMenu from "../DrawerMenu";


export default function Layout({ children }) {
    return <div>
      <AppBar />
      
      {children}
      <DrawerMenu/>
      </div>
  }