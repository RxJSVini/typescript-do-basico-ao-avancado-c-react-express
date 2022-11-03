import React, { createContext, useContext } from "react";
 
 // 10 - Context

  interface IAppContext {
    language:string,
    framework:string,
    projects:number
  }


export const Conext = () =>{
    const details = useContext(AppContext);

    return(
        <>
            <h2>Linguagem:{details?.language}</h2>
            <h2>Framework:{details?.framework}</h2>
            <h2>Projects:{details?.projects}</h2>
        </>
    )
}


export const AppContext = createContext<IAppContext | null>(null);