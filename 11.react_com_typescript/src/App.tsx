import React from "react";
import { AppContext, Conext,  } from "./Contexts/AppContext";
// 6 - Hook useState
import { States } from "./components/States";
// 5 - Desestruturing
import { Desestruturando, Category } from "./components/Desestruturando";

// 4 - Importação de components
import FirstComponents from "./components/FirstComponents";


// 8 - Types

type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";


const App:React.FC = () =>{
  // 1 - variaveis

  const name:string ="Vinicius";
  const age:number = 25;
  const isWorking:boolean = true;

  // 2 - funções

  const useGreeting = (name:string):string =>{
      return `Olá, ${name}`;
  }

  let contextValue = {
    language:"Javascript",
    framework:"Express",
    projects:2,
  }

  return (
    
    <AppContext.Provider value={contextValue}>
      <h1>Typescript com React</h1>
      <h2>Nome:{name}</h2>
      <h2>Idade:{age}</h2>
      {isWorking && (
        <div>
            <h3>Está trabalhando.</h3>
        </div>
      )}
      <h3>{useGreeting(name)}</h3>
      <FirstComponents tech="Reactjs e Typescript"/>

      <div>
          <Desestruturando 
              title="Primeiro Post" 
              content="Loren Ipsum, Loren Ipsum, Loren Ipsum, Loren Ipsum, Loren Ipsum, Loren Ipsum, Loren Ipsum, Loren Ipsum"
              tags={["#react", "#typescript"]}
              category={Category.TS}   
          />
      </div>
     <br/>

      <States/>
     <Conext/>
    </AppContext.Provider>
  );
}

export default App;
