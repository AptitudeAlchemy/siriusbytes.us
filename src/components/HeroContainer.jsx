function HeroContainer () {

    const styles = {
        section: {
            minHeight:"75vh",
            paddingTop:"1.2rem",
        },
        heroHeading: {
            fontSize:"5rem"
        },
        heroSubHeadring: {
            fontSize:"1.8rem"
        }
    }

    const actionsButtons = [
        {_id:0, title:"Explore our service", route:"our-services"},
        {_id:1, title:"Contact us", route:"contact-us"},
    ];


    return <>

        <section style={styles.section} className="container-fluid bg-transparent d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="h1 fw-bold text-capitalize" style={styles.subHeading}>
                We are<br/><span className="h1 text-uppercase"
                style={{color:"var(--brand-secondary)", ...styles.heroHeading}}>sirius bytes</span>
            </h1>
            <h6 className="h6 mt-2 mb-5 w-25 text-secondary">Empowering ideas with the spark of technology.<br/>
                We craft simple, smart, and scalable digital solutions for creators, startups, and dreamers.
            </h6>
            <h4 className="h4">Let's turn your vision into reality - Byte by Byte 🚀</h4>

            <div className="hero-btns d-flex justify-content-center align-items-center">
                {
                    actionsButtons.map(button => (
                        <button className="mx-2 px-3 mt-5 p-2 btn-grad text-capitalize text-light"><a href={`#${button.route}`} className="text-light">{button.title}</a></button>
                    ))
                }
            </div>

        </section>
      

    </>

}

export default HeroContainer;