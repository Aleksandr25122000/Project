import "./main.css"
import {Section} from "./mcomps/section/section"
import {Article} from "./mcomps/article/article"
import {Aside} from "./mcomps/aside/aside"

export default function Main(){
    return(
        <div className="main">
           <Section></Section>
            <Article></Article>
            <Aside></Aside>
        </div>
    )
}