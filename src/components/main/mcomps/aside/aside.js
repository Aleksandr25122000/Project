
import "./aside.css"
import LogoPic from "../../../../media/1.jpg"
import {Link} from "react-router-dom";
export function Aside(){
    return(
        <div className="aside">
            <img src={LogoPic} width="150"/><br/>
            <Link to="/connection"> <h3>Наши контакты</h3> </Link>
        </div>
    )


}