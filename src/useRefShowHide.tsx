import React, { useRef, useState } from 'react';

function UseRefShowHide() {
    const [isVisible, setIsVisible] = useState(true);
    const inputRef = useRef(null);

    const showInput = () => {
        setIsVisible(true);

    };

    const hideInput = () => {
        setIsVisible(false);
    };


    return (
        <div>
            <button onClick={showInput}>Show</button>
            <button onClick={hideInput}>Hide</button>
            <input type="text" ref={inputRef} style={{display:isVisible? 'block': 'none'}}/>
        </div>
    );
}

export default UseRefShowHide;


