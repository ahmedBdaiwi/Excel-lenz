import React from "react";
import Sidebar from "../components/Sidebar";



export default function Sales({sidebarOpen, setSidebarOpen,}) {
    return(
        <div>
            <div className="layout">
                <Sidebar
                    open={sidebarOpen}
                    setOpen={setSidebarOpen}
                />
            </div>
        </div>
    );
}