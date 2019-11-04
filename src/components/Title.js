import React from 'react'

export default function Title({name, title}) {
    return (
        <div className="row paddit">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h3 className="text-capitalize font-weight-bold">{name} <strong className="text-blue">{title}</strong></h3>
                
            </div>
        </div>
    )
}
