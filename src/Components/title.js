import React from 'react';

function Title(){
    console.log('--Title is renderd--');
    return(
        <>
        <h2>useCallback demonstration</h2>
        </>
    );
}

export default React.memo(Title);