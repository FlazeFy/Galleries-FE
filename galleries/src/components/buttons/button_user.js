import React from 'react'

// Modules CSS
import button from './buttons.module.css'

// Modules JS
import { convertDatetime, ucFirstChar } from '@/modules/helpers/converter'

export default function GetButtonUser({name, date}) {    
    if(date != null){
        return (
            <div href={"global/user/"+name} classNxame={button.btn_user}>
                <div className='d-inline-block'>
                    <img className={button.img_user} src="/assets/avatars/female.png"></img> 
                </div>
                <div className='d-inline-block ps-1'>
                    @{ucFirstChar(name)}
                    <p className={button.date_props}>at {convertDatetime(date, "calendar")}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div href={"global/user/"+name} className={button.btn_user}>
                <img className={button.img_user} src="/assets/avatars/female.png"></img> @{ucFirstChar(name)}
            </div>
        )
    }
}