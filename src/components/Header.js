import * as constant  from "../utils/constant";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={constant.LOGO_URL} alt='lOGO here'/>
            </div>
            <h1 className="heading">Food Corner</h1>
            <div className="nav-list">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;