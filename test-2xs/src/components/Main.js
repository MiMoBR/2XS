import React, { useState } from 'react'
import Search from './Search'
import Map from './Map'

const Main = () => {
    const [ googleInfo, setGoogleInfo ] = useState('')

    return(
        <>
            <Map
                onChangeCallBack={ (googleInfo) => setGoogleInfo(googleInfo) }
            />
            <Search
                toSearch={ googleInfo }
            />
        </>
    )
}

export default Main