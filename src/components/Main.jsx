import React from 'react'
import Sub from './Sub'

export default function Main({ gift }) {
    return (
        <div>
            This is a main component
            <Sub gift={gift} />
        </div>
    )
}
