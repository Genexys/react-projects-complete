import React, { useState, useEffect } from 'react';
import rgbToHex from './utils'

const SingleColor = ({color, index}) => {
    console.log()
    const [alert, setAlert] = useState(false);
    const rgb = color.rgb.join(',');
    const hexColor = color.hex;
    const hexValue = `#${hexColor}`;
    
    useEffect(() => {
        let timeout = setTimeout(() => {
            setAlert(false)
        }, 3000);
        return () => clearTimeout(timeout)
    }, [alert])
    
    return (
        <article
            className={`color ${index > 9 && 'color-light'}`}
            style={{backgroundColor: `rgb(${rgb})`}}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hexValue)
            }}>
            <p className="percent-value">
                {color.weight}%
            </p>
            <p className="color-value">
                {hexValue}
            </p>

            {alert && <p className="alert">copied to clipboard</p>}
        </article>
    );
};

export default SingleColor;
