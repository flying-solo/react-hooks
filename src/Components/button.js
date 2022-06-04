import React from 'react';

function Buttons({handleClick, children}){
    console.log(`--${children} Button is rendered--`)
    return(
        <div className="">
            <button onClick={handleClick}>{children}</button>
        </div>
    );
}

export default React.memo(Buttons);