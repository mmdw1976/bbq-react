import React from 'react'

const Recept = ({ recept }) => {
    console.log(`../../images/${recept.image}`)
    return (
      <div className='recept-card'>
        <div className='recept-card__img'>
          <img className='box-shadow' src={recept.image} alt={recept.title} />
        </div>
        <div className='recept-card__content'>
          <h2>{recept.title}</h2>
          <button className='section-btn'>Ga Naar recept</button>
        </div>
      </div>
    );
}
 
export default Recept;