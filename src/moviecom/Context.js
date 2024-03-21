import React, { useState } from 'react'

const AppContext = React.createContext();


const AppProvider = ({ children }) => {

    const [vlue, setVlue] = useState("thor");
    const[value,setValue]=useState("thor");
    const sum=()=>{
        setVlue(setValue);
        alert("succesful");
    
    
       }
   

 

    return <AppContext.Provider value={{ vlue, setVlue }}>{children}
        <div>
            <div className="search">
               <form action="#" onSubmit={(e)=>{e.preventDefault()}}>
               <input type="text" id="value" placeholder="Enter pare"
               

                     onChange={(e) => { setValue(e.target.value) }} />
                     <p onClick={sum}>?</p>

               </form>
            </div>
        </div>
        </AppContext.Provider>

}

export { AppContext, AppProvider };




///// for Practice 
// const AppContextt = React.createContext();


// const ApppProvider=(children)=>{



//     const[setvalue,value]=useState("manas")

//     return <AppContextt.Provider value={val}>{children}

//     <div className="container">





//     </div>
    
    
//     </AppContextt.Provider>

// }


// export{AppContextt,ApppProvider}