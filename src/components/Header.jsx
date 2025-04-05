import './Header.css';
import brandIcon from '../assets/siribytes.png';
// import brandTagLine from '../assets/brand-with-tagline.png';

function Header() {

    const navLinks = [
        {_id:0, title:'our service', route:'our-services'},
        {_id:1, title:'contact us', route:'contact-us'},
        {_id:2, title:'download', route:'download'},
        {_id:3, title:'faqs', route:'faqs'},    
    ]

    return <>
        <header
            className="container px-0 bg-transparent d-flex justify-content-between align-items-center">
            <div className="brand-logo d-flex justify-content-start align-items-center">
                {/* <img src={brandIcon} alt="" className="brand-icon img-fluid w-100 h-100" /> */}
                <img src={brandIcon} alt="" className="brand-tagline img-fluid w-100 h-100 mx-3"/>
            </div>

            <nav className='nav-links d-flex justify-content-center align-items-center'>
                {/* <a href="#" className="h6 fw-bold text-capitalize mx-2">Our services</a> */}
                {
                    navLinks.map(link => (
                        <a key={link._id} href={`#${link.route}`} className="h6 fw-bold text-capitalize mx-4">{link.title}</a>
                    ))
                }
                <button className='btn-grad text-light py-2 px-2 ms-2'><a href="#" className="text-light fw-bold text-uppercase px-4">Join</a></button>
            </nav>

        </header>
    </>
}

export default Header;