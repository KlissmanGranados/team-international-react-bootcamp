import { faHandsAslInterpreting, faPlus, faRotateBack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import "./index.css";

function Counter() {

    const [number, setNumber] = useState(0);
    const increment = () => setNumber(number + 1);
    const reset = () => setNumber(0);

    let paragraphMessage;
    let buttonMessage;

    if (number === 0) {
        paragraphMessage = 'Presione el botón para iniciar el conteo!';
        buttonMessage = 'Presioname!';
    } else {
        paragraphMessage = number === 1 ?
            `Ha presionado el botón ${number}, vez :0` :
            `Ha presionado el botón ${number}, veces :0`;
        buttonMessage = 'Sumar 1 al contador!';
    }

    if (number === 0) {
        return (
            <div className='container'>
                <p className="container__paragraph">{paragraphMessage}</p>
                <div className='container__buttons'>
                    <button className="container__button" onClick={increment}>
                        <FontAwesomeIcon className="container__fontawesome" icon={faHandsAslInterpreting} />
                        <span className='container__span'>{buttonMessage}</span>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <p className="container__paragraph">{paragraphMessage}</p>
            <div className='container__buttons'>
                <button className='container__button' onClick={increment}>
                    <FontAwesomeIcon className="container__fontawesome" icon={faPlus} />
                    <span className='container__span'>{buttonMessage}</span>
                </button>
                <button className="container__button" onClick={reset}>
                    <FontAwesomeIcon className="container__fontawesome" icon={faRotateBack} />
                    <span className='container__span'>Reiniciar conteo</span>
                </button>
            </div>
        </div>
    )

}

export default Counter;