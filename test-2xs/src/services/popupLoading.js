import React from 'react'
import LoadingArrow  from '../images/LoadingArrow'

const PopUpLoading = ({ onClose }) => {
    return (
        <div className="popupboxBackground" onClick={onClose()}>
            <div className="popupboxMiddle">
                <div className="popupboxbody">
                    <div>
                        <LoadingArrow/>
                    </div>
                    <div className="popupboxbody__title">
                        <h2><b>Ongoing process.</b></h2>
                    </div>
                    <div className="popupboxbody__body">
                        <h3>Please wait a moment.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpLoading