// Modules CSS
import style from './navbar.module.css'

export default function GetNavbar({active}) {
    function getActive(val, curr){
        if(val == curr){
            return style.active;
        } else {
            return "";
        }
    }

    return  <nav className="navbar navbar-expand-lg p-0">
        <div className={style.nav_holder}>
            <a className="navbar-brand fw-bold text-primary" href="/">Galleries</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className={style.nav_item}>
                        <a className={style.nav_link + " " + getActive(active,"home")} aria-current="page" href="#">Home</a>
                    </li>
                    <li className={style.nav_item}>
                        <a className={style.nav_link + " " + getActive(active,"global")} aria-current="page" href="#">Global</a>
                    </li>
                    <li className={style.nav_item}>
                        <a className={style.nav_link + " " + getActive(active,"collection")} aria-current="page" href="#">Collection</a>
                    </li>
                    <li className={style.nav_item}>
                        <a className={style.nav_link + " " + getActive(active,"help")} aria-current="page" href="#">Help</a>
                    </li>
                    <li className={style.nav_item}>
                        <a className={style.nav_link + " " + getActive(active,"about")} aria-current="page" href="#">About Us</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className={style.search_btn} type="submit">Search</button>
                    <ul className="navbar-nav ms-2">
                        <li className="nav-item">
                            <a className="nav-link p-0" aria-current="page" href="#"><img className={style.profile_btn} src="/assets/avatars/female.png"></img></a>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </nav>
}