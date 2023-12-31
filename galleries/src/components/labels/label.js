// Modules CSS
import style from './labels.module.css'

export default function GetLabel({type, title, desc}) {
    if(type == "main_title"){
        return <div className={style.title_holder}>
            <h1 className={style.title_text}>{title}</h1>
            <h6 className={style.desc_text}>{desc}</h6>
        </div>
    } else {
        return <></>
    }

}