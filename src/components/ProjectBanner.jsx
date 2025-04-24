import React from 'react'

function ProjectBanner() {
    const styles = {
        banner: {
            minHeight:'40vh',

        },
        input: {
            border:'2px solid #f1f1f1',
            borderRadius:'50px',
            padding:'0.25rem 0.5rem',
        }
    }

  return (
    <section className='ProjectSearchBanner w-100 container d-flex justify-content-center align-items-center flex-column' style={styles.banner}>
        <h2 className="text-light h2 fw-bold text-center" style={{
            fontFamily:'poppins-semibold'
        }}>Looking for affortable pre-build projects as a college student?</h2>

        <form action="" className='mt-5 w-50 d-flex justify-content-center align-items-center p-2 rounded' style={{background:'var(--white-glass)'}}>
          <div className="w-100 input-area d-flex justify-content-center align-items-center" style={styles.input}>
          <label htmlFor="search">
                <i className="fas fa-search text-dark mx-2"></i>
            </label>
            <input className='text-dark py-2 w-100 border-0 outline-none bg-transparent' type="text" name="search" id="search-input" placeholder='Search projects' style={{border:'none', outline:'none'}}/>
          </div>
            <button className="btn mx-2 text-light fw-bold f-small" style={{background:'var(--brand-primary)'}}>Search</button>
        </form>
    </section>
  )
}

export default ProjectBanner