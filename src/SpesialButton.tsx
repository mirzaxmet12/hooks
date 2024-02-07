import { useRef } from 'react';

function SpesialButton() {
    const statusRef = useRef("inprogress");

    const handleClick = () => {
        if (statusRef.current === "inprogress") {
            statusRef.current = "delivered";
        } else {
            statusRef.current = "inprogress";
        }
        console.log("New status:", statusRef.current);
    };

    return (
        <ul>
            <li>{statusRef.current}</li>
            <li>{statusRef.current}</li>
            <li>{statusRef.current}</li>
            <button onClick={handleClick}>Spesial button</button>
        </ul>
    );
}

export default SpesialButton;


