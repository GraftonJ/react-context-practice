import React, { useState, useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'

const Field = () => {
    const context = useContext(LanguageContext)
    const labelText = context === 'english' ? 'Name' : 'Naam'
    return (
        <div className="ui field">
            <label>{labelText}</label>
            <input />
        </div>
    )
}

export default Field