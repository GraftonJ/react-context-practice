import React, { useState, useEffect } from 'react'
import Field from './Field'
import Button from './Button'


const UserCreate = () => {
    return (
        <div className="ui form">
            User Create
            <Field />
            <Button />
        </div>
    )
}

export default UserCreate;