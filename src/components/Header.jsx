import React from 'react'
import '../styles/header.css'
import Activities from './Activities'
import Options from './Options'
import TimeDate from './TimeDate'

export default function Header() {
    return (
        <div className='header' onContextMenu={(e) => { 
            e.preventDefault(); 
            e.stopPropagation(); 
            return false }}>
            <Activities />
            <TimeDate />
            <Options />
        </div>
    )
}
