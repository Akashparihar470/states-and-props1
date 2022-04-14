import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:10,
    total: 73
  });
  
  const handleplus = (value,key) => {
    inv[key] = inv[key]+value
     return setInv({
       books: inv.books,
       notebooks: inv.notebooks,
       pens: inv.pens,
       inkpens: inv.inkpens
     })
  }
 
  const handleminus = (value,key) => {
    inv[key] = inv[key]-value
     return setInv({
       books: inv.books,
       notebooks: inv.notebooks,
       pens: inv.pens,
       inkpens: inv.inkpens
     })
  }
  
  const sum = (a,b,c,d) =>{
    return a+b+c+d;
  }

    
  
  
    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>handleplus(1,"books")}>+</button>
        <button className="circlularButton"  onClick={()=>handleminus(1,"books")}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>handleplus(1,"notebooks")}>+</button>
        <button className="circlularButton"  onClick={()=>handleminus(1,"notebooks")}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>handleplus(1,"pens")}>+</button>
        <button className="circlularButton"  onClick={()=>handleminus(1,"pens")}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton"  onClick={()=>handleplus(1,"inkpens")}>+</button>
        <button className="circlularButton"  onClick={()=>handleminus(1,"inkpens")}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {
              
   
            }
      total: {sum(inv.books,inv.notebooks,inv.pens,inv.inkpens)}
    </div>
  );
};