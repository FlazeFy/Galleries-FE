// Modules CSS
import style from './label.module.css'

export default function GetLabel({type, title, desc}) {
    if(type == "main_title"){
        return <div className={style.title_holder}>
            <h1 className={style.title_text}>{title}</h1>
            <h6 className={style.desc_text}>{desc}</h6>
        </div>
    } else if(title.trim() != ""){
        if (type == "input"){
            return <label className={style.input}>{title}</label>
        } else if (type == "error"){
            return <label className={style.error}><FontAwesomeIcon icon={faTriangleExclamation} width="14px"/> {title}</label>
        } else {
            return null
        }
    } else {
        return <></>
    }

}