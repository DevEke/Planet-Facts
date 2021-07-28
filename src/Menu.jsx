import {Link} from 'react-router-dom';
import {IoChevronForward} from 'react-icons/io5';

function Menu() {
    return (
        <div className="menu__wrapper">
            <Link to="/planets/Mercury" className="menu-link">
                <div className="menu-flex">
                    <div style={{backgroundColor: '#DEF4FC'}} className="circle"/>
                    <p>Mercury</p>
                </div>
                <IoChevronForward className="caret"/>
            </Link>
            <Link to="/planets/Venus" className="menu-link">
                <div className="menu-flex">
                    <div style={{backgroundColor: '#F7CC7F'}} className="circle"/>
                    <p>Venus</p>
                </div>
                <IoChevronForward className="caret"/>
            </Link>
            <Link to="/planets/Earth" className="menu-link">
                <div className="menu-flex">
                    <div style={{backgroundColor: '#545BFE'}} className="circle"/>
                    <p>Earth</p>
                </div>
                <IoChevronForward className="caret"/>
            </Link>
            <Link to="/planets/Mars" className="menu-link">
                <div className="menu-flex">
                    <div style={{backgroundColor: '#FF6A45'}} className="circle"/>
                    <p>Mars</p>
                </div>
                <IoChevronForward className="caret"/>
            </Link>
            <Link to="/planets/Jupiter" className="menu-link">
                <div className="menu-flex">
                    <div style={{backgroundColor: '#ECAD7A'}} className="circle"/>
                    <p>Jupiter</p>
                </div>
                <IoChevronForward className="caret"/>
            </Link>
            <Link to="/planets/Saturn" className="menu-link">
                <div className="menu-flex">
                    <div style={{backgroundColor: '#FCCB6B'}} className="circle"/>
                    <p>Saturn</p>
                </div>
                <IoChevronForward className="caret"/>
            </Link>
            <Link to="/planets/Uranus" className="menu-link">
                <div className="menu-flex">
                    <div style={{backgroundColor: '#65F0D5'}} className="circle"/>
                    <p>Uranus</p>
                </div>
                <IoChevronForward className="caret"/>
            </Link>
            <Link to="/planets/Neptune" className="menu-link">
                <div className="menu-flex">
                    <div style={{backgroundColor: '#497EFA'}} className="circle"/>
                    <p>Neptune</p>
                </div>
                <IoChevronForward className="caret"/>
            </Link>
        </div>
    )
}

export default Menu;