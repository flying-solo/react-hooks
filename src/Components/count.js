import React from 'react';

function Count({text, count}){
    console.log(`--${text} Count is rendered--`);
    return(
        <div className="">
            {text} : {count}
        </div>
    );
}

export default React.memo(Count);