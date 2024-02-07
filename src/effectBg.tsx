import { OptionValues } from 'commander';
import React, { useState, useEffect } from 'react'


function EffectBg() {
    const [bgColor, setBgColor] = useState('yellow');
    
    useEffect(() => {
        document.body.style.background = bgColor
        
    }, [setBgColor,handleColorChange])
    function handleColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setBgColor(e.target.value)
    }
    return (
        <div>
            <select name="" id="" value={bgColor} onChange={handleColorChange}>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
                <option value="blue">blue</option>
            </select>
            <p>{bgColor}</p>
        </div>
    )
}

export default EffectBg
