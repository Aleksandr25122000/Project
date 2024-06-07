import "./head.css"
import {Link} from "react-router-dom"
export default function Head(){
    return(
        <div className="head">
            <Link to="/news">Кофейня АромаВау</Link>
        </div>
    )
}