import React from 'react'

const PopUpErro = ({ onClose }) => {
    return (
        <div className="popupboxBackground" onClick={onClose()}>
            <div className="popupboxMiddle">
                <div className="popupboxbody">
                    <div className="f-modal-alert">
                        <div className="f-modal-icon f-modal-error animate">
                            <span className="f-modal-x-mark">
                                <span className="f-modal-line f-modal-left animateXLeft"></span>
                                <span className="f-modal-line f-modal-right animateXRight"></span>
                            </span>
                            <div className="f-modal-placeholder"></div>
                            <div className="f-modal-fix"></div>
                        </div>
                    </div>
                    <div className="popupboxbody__title">
                        <h2><b>Attention!</b></h2>
                    </div>
                    <div className="popupboxbody__body">
                        <h3>Please drag some place</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpErro