import { useState } from "react";
import SideBarContext from "./SidebarContext";

const SidebarState = (props)=>{
    const [sidebarIsOpen, setSidebarIsOpen] = useState(true)
    return(
        <SideBarContext.Provider value={{sidebarIsOpen, setSidebarIsOpen}}>
            {props.children}
        </SideBarContext.Provider>
    )
}

export default SidebarState;