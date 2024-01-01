import React from 'react'

// Modules CSS
import button from './buttons.module.css'

// Modules JS
import { ucFirstWord } from '@/modules/helpers/converter'

export default function GetButtonTag({name}) {    
    return (
        <button className={button.btn_tag} title="Click to use this as filter">{ucFirstWord(name)}</button>
    )
}