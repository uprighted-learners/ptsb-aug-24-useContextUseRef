import React from 'react'
import Distant from './Distant'

export default function Sub({ gift }) {
    return (
        <div>
            This is a sub component
            <Distant gift={gift} />
        </div>
    )
}
