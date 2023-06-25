import React, { useState, createContext, useContext } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebar from "./Sidebar";

const SidebarContext = createContext({});

export const MyProSidebarProvider = ({ children }) => {
  const [sidebarBackgroundColor, setSidebarBackgroundColor] =
    useState(undefined);
  return (
    <ProSidebarProvider>
      <SidebarContext.Provider
        value={{
          sidebarBackgroundColor,
          setSidebarBackgroundColor,
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <Sidebar />
          {children}
        </div>
      </SidebarContext.Provider>
    </ProSidebarProvider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
