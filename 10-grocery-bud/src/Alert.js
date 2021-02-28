import React, {useEffect} from 'react';

const Alert = ({message, type, removeAlert, list}) => {

    useEffect(() => {
        console.log('run')
        let timout = setTimeout(() => {removeAlert(false, '', '')}, 3000)
        return () => clearInterval(timout)
    }, [list]);

    return (
        <p className={`alert alert-${type}`}>
            {message}
        </p>
    );
};

export default Alert;
