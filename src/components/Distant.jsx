import React, { useContext } from 'react'
import { Context } from '../App'

export default function Distant({ gift }) {
    console.log(`Here lies the gift: ${gift}`)

    const [realGift, setRealGift] = useContext(Context)

    return (
        <div>This is a distant componet</div>
    )
}
