import React from 'react'
import Recept from './Recept';

// import recepten style
import './Recepten.css';

const Recepten = ({ recepten }) => {
    console.log(recepten)
    return ( 
        <div>
            <div className="recept-container">
                {recepten.map(recept => {
                    return (
                        <Recept recept={ recept } key={ recept.id }/>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Recepten;