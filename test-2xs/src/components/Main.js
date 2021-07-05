import React, { useState } from 'react'
import Search from './Search'
import Map from './Map'
import '../components/styles/main.css'

const Main = () => {
    const [ googleInfo, setGoogleInfo ] = useState('')

    return(
        <div className="main container-fluid">
            <Map
                onChangeCallBack={ (googleInfo) => setGoogleInfo(googleInfo) }
            />
            <Search
                toSearch={ googleInfo }
            />
        </div>
    )
}

export default Main