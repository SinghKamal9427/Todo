import React, { useEffect } from "react";
import { useState,useRef } from "react";
import "./home.css";
import "../../app/globals.css";
import SidebarTop from "../../components/sidebarTop";
import SidebarBot from "../../components/sidebarBot";
import Browser from "../../components/browser";
import { useRouter } from 'next/router'


export default function Dash() {
  
  const router = useRouter()

  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  const startResizing = React.useCallback((mouseDownEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(()=>{
     const token = localStorage.getItem('token')
     if(!token){
     router.push('/login')
     }
  },[])

  const resize = React.useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            sidebarRef.current.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  React.useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className="app-container">
      <div
        ref={sidebarRef}
        className="app-sidebar "
        style={{ width: sidebarWidth }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="app-sidebar-content flex flex-col gap-4">
          <SidebarTop/>
          <SidebarBot/>
        </div>
        <div className="app-sidebar-resizer" onMouseDown={startResizing} />
      </div>
      <div className="app-frame">
        <Browser/>
      </div>
    </div>
  );
}
