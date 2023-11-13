import React from 'react'
import Isotope from "isotope-layout"
import { useEffect } from "react"

// Modules CSS
import container from './containers.module.css'

// Modules JS
import { ucFirstChar, ucFirstWord } from '@/modules/helpers/converter'

export default function GetGalleryContainer({builder, is_detailed}) {
    useEffect(() => {
        isotopeLayout();
    },[])

    const isotopeLayout = () => {
        var grid = document.querySelector('.grid');
        var iso = new Isotope( grid, {
            itemSelector: '.grid-item',
        });
    }

    const getTypeGrid = (is_detailed) => {
        if(is_detailed){
            return "col-4"
        } else {
            return ""
        }
    }
    
    return (
        <div className={"grid-item " + getTypeGrid(is_detailed)}>
            <button className={container.btn_grid_img} title="View gallery">
                <img src={builder['galleries_url']} className={container.gallery_img} alt="" />
                {
                    is_detailed == true ? (
                        <>
                            <div className={container.gallery_props}>
                                <p>{builder['created_at']}</p>
                            </div>
                            <div className={container.gallery_caption}>
                                <h4>{ucFirstWord(builder['galleries_name'])}</h4>
                                {
                                    builder['galleries_desc'] !== '' ? (
                                        <p>{ucFirstChar(builder['galleries_desc'])}</p>
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                        </>
                    ) : (
                        <></>
                    )
                }
            </button>
        </div>
    )
}
  