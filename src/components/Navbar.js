import logo1 from './earth-icon.svg'

export default function Navbar(){
    return(
        <nav>
            <img src={logo1} className="nav--logo" />
            <h3>My Travel Journal</h3>
        </nav>
    )
}