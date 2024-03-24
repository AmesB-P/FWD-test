import React, {ReactNode} from "react";

const Card  = ({children , customClassName } : {children : ReactNode , customClassName? : string}) : JSX.Element  => {
    return (
        <div className={customClassName ? customClassName :'w-full h-full max-w-lg px-10 py-8 mx-auto bg-gray-100 rounded-lg shadow-xl'}>
            {children}
        </div>
    )
}

export default Card