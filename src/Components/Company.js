import React from 'react'
import '../App.css'






function Company (props) 
{
   
    return (
        <div>
            <div className={'card'}>
                <img src={props.Logo} alt="Avatar" />
                <div>
                    <p>{props.CompanyName}</p>
                    <h3>Payment accepted</h3>
                    <p>{props.PayentType}</p>
                    <h3>Rating Company</h3>
                    <p>{props.RatingCompany}</p>
                </div>
            </div>
        </div>
    )
}

export default Company