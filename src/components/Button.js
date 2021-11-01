import React, { useState, useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext';

const Button = () => {
    const renderButtonText = value => value === 'english' ? 'Submit' : 'Voorleggen';

    return (
        <ColorContext.Consumer>
        {(color) => 
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => renderButtonText(value)}
                </LanguageContext.Consumer>
            </button>
        }
        </ColorContext.Consumer>
    )
}

export default Button