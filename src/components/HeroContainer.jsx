import cursorDown from '../assets/icons/mouse-cursor.png';

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
        {_id:0, title:"Explore our services", route:"our-services"},
        {_id:1, title:"Contact us", route:"contact-us"},
    ];


    return <>

        <section style={styles.section} className="container bg-transparent d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="h2 fw-bold text-capitalize" style={styles.subHeading}>
                We are<br/><span className="h1 text-uppercase"
                style={{color:"var(--brand-secondary)"}}>siribytes</span>
            </h1>
            <h6 className="h6 mt-2 mb-5 w-100 text-secondary">Empowering ideas with the spark of technology.<br/>
                We craft simple, smart, and scalable digital solutions for creators, startups, and dreamers.
            </h6>
            <h4 className="h4">Let's turn your vision into reality - Byte by Byte 🚀</h4>

            <div className="hero-btns d-flex justify-content-center align-items-center row">
                {
                    actionsButtons.map(button => (
                        <button style={{textWrap:'nowrap'}}key={button._id} className="w-100 col col-xl mx-2 px-3 mt-5 p-2 btn-grad text-capitalize text-light"><a href={`#${button.route}`} className="text-light">{button.title}</a></button>
                    ))
                }
            </div>
            
        </section>
        <section className='scroll-down mt-2 d-flex justify-content-center align-items-center flex-column'>
            <h2 className="h6 text-uppercase">Scroll down</h2>
            <img src={cursorDown} alt="" width={48} height={48} />
        </section>
    </>

}

export default HeroContainer;