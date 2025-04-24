import React from 'react'

function ProjectCard({card}) {

    console.log(card._id);

    const styles = {
        card:{
            width:'fit-content',
            maxWidth:'320px',
            // padding:'0.25rem 0.5rem',
        },
        initialAmount: {
            textDecoration:'line-through'
        }

    }

  return (
    <div key={card._id} className='card m-2 ProjectCard' style={{background:'var(--white-glass)', ...styles.card}}>

        <img src={card.url} alt="Product image" className="img-fluid w-100 h-100 rounded-rectangle" />

        <div className="content p-2">
            <h2 className="h2 fw-bold">{card.title}</h2>
            <p className="description h6 text-secondary my-2 f-small " style={{minHeight:'8vh',maxHeight:'12vh'}}>{card.description}</p>

            <div className="price-tag">
                    <h6 className="h6" style={styles.initialAmount}>{card.price} INR</h6>
                <div className="old-discount d-flex justify-content-start align-items-center">
                <h4 className="h4">{Math.floor(card.price * card.discount)} INR</h4>
                    <span className="h6 px-2 py-1 text-light bg-success mx-2">%{card.discount * 100} discount</span>
                </div>
            </div>
            
            <button className="btn btn-primary w-100 my-2 f-small">Buy Now <i className="fas fa-cart-shopping"></i></button>
            
        </div>
    </div>
  )
}

export default ProjectCard