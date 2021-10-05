import React, { Component } from 'react'
import './homepage.css'
import { useAuth } from "../../contexts/useAuth"

export default function Homepage() {      
    const { currentUser } = useAuth()
    console.log('user',currentUser)

        return (
            <div className='main'>
                 <h3>Welcome {currentUser.email}</h3>             
            </div>
        )
    
}
