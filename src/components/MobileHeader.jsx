import brandLogo from '../assets/siribytes.png';
function MobileHeader () {

    return <>
        <header className="container-fluid w-100 bg-dark d-flex justify-content-between align-items-center">
            <div className="logo w-100">
                <img src={brandLogo} alt="" 
                className="img-fluid w-100 brand-logo"
                 style={{maxWidth:"15rem"}}/>
            </div>
            <button className='w-20 btn btn-transparent text-light mx-4'><i className="fas fa-bars"></i></button>
        </header>
    </>

}

export default MobileHeader;