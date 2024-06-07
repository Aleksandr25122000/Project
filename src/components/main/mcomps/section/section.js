import "./section.css"
import LogoPic from "../../../../media/1.jpg"
import {Link} from "react-router-dom";
export function Section(){
    return(
        <div className="section">
            <img src={LogoPic} width="150" />
            <Link to="/home"> <h3>Главная</h3> </Link>
            <Link to="/news"> <h3>Меню</h3></Link>
            <Link to="/contacts"> <h3>Программа лояльности </h3></Link>
         <Link to="/about"> <h3>Новости</h3></Link>
            <Link to="/job"> <h3>Работай у нас </h3></Link>
        </div>
    )


}
