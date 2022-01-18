import React from 'react'
import { useState } from 'react/cjs/react.development';
import Button from '../../Constants/Button'

function Header({ title, addTaskFromHeader, headerButtonTextPrimary, headerButtonTextSecondary, headerButtonColor }) {

    const [isOpen, setIsOpen] = useState(false);

    const addTask = () => {
        addTaskFromHeader();
        setIsOpen(!isOpen);
    }

    return (
        <div className="header">
            <h1> {title}</h1>
            <Button
                onClick={addTask}
                headerButtonColor={headerButtonColor}
                buttonText={
                    isOpen ? headerButtonTextSecondary : headerButtonTextPrimary}
            />
        </div>
    )
}

export default Header
