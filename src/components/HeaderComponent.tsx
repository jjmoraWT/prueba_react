import {Link} from "react-router-dom"

const HeaderComponent: React.FC<any> = () =>{
    return ( 
        <>
        <link rel="stylesheet" href='css/header.css'></link>
        <header>
            <div id='header'>
                <div className="div-menu">
                        <Link  className="menu-link" to="/form-cars">Form</Link>
                    
                </div>
                <div  className="div-menu">
                    <Link  className="menu-link" to="/all-cars">All cars</Link>
                    
                </div>
            </div>
        </header>
        </>
    )
}

export default HeaderComponent;