import { createContext, useState } from "react";

export const SizeContext = createContext()

function SizeProvider({children}) {
    const [size, setSize] = useState(window.innerWidth);
    const data = {size,setSize}
    return ( 
        <SizeContext.Provider value={data}>{children}</SizeContext.Provider>
     );
}

export default SizeProvider;