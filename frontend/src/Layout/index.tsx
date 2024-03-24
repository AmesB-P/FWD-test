import React from 'react';
function Layout({children} : {children : React.ReactNode}) {
    return (
        <div
            className='flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br'>
            {children}
        </div>
    );
}

export default Layout;
