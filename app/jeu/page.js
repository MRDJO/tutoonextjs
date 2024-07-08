'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Link from "next/link"

const jeu = () => {

    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number+1)
    }

    
    const decrement = () => {
        setNumber(number-1)
    }

    useEffect(()=>{
        console.log("Le nombre a changé")

        return () => {
            console.log("Le composant est démonté")
        }
    }, [number])

    return (
        <>
            <div>
                {number}
            </div>
            <button onClick={increment}>Increment</button>
            <button  onClick={decrement}>Decrement</button>
            <Link href="/cv"  >Cv</Link>
        </>
    )
}

export default jeu
