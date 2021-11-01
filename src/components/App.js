import React, { useState } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'


const App = () => {
    const [language, setLanguage] = useState('english')
    
    return (
        <div className="ui container">
            <div>
                Select a Language
                <i className="flag us" onClick={() => setLanguage('english')} />
                <i className="flag nl" onClick={() => setLanguage('dutch')} />
            </div>
            <ColorContext.Provider value={language === 'english' ? 'blue' : "red"}>
                <LanguageContext.Provider value={language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </ColorContext.Provider>
        </div>
    )
}

export default App