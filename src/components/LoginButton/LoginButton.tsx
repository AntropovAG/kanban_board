import React from 'react'
import styles from './loginButton.module.css'
import { useState } from 'react'
import LoginMenu from '../LoginMenu/LoginMenu.tsx'

export default function LoginButton(): JSX.Element{
    const [isClicked, setIsClicked] = useState<boolean>(false)

        const handleClick = () => {
                setIsClicked(!isClicked)
        }

    return (
    <>
            <button className={styles.container} onClick={handleClick}>
            <img className={styles.avatar} src="/user-avatar.png" alt="user avatar" />
            <div className={`${styles.arrow} ${isClicked?styles.arrowDown:styles.arrowUp}`} />
            {isClicked && (
                <LoginMenu />
            )}
        </button>



    </>

    )
}
