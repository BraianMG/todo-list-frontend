import React, { Fragment } from 'react'

const Alert = props => {

    const { msg, danger } = props.alert;
    return (
        <Fragment>
            <div className={danger ? "alert alert-danger mt-5 text-center" : "alert alert-success mt-5 text-center"} role="alert">
                <ul>
                    <li>
                        {msg}
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Alert;
