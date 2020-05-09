import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'

const Homepage = () =>{

    const { test } = useContext(ShopContext)

    return (
        <div>
            Home
            {test}
        </div>
    )
}

export default Homepage
