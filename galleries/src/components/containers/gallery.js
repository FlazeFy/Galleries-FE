import React from 'react'
import Isotope from "isotope-layout"
import { useEffect } from "react"

// Modules CSS
import container from './containers.module.css'

// Modules JS
import { ucFirstChar, ucFirstWord } from '@/modules/helpers/converter'

export default function GetGalleryContainer({builder}) {
    useEffect(() => {
        isotopeLayout();
    },[])

    const isotopeLayout = () => {
        var grid = document.querySelector('.grid');
        var iso = new Isotope( grid, {
            itemSelector: '.grid-item',
        });
    }
    
    return (
        <>
            <div className="grid-item col-4">
                <button className={container.btn_grid_img} data-bs-toggle="modal" data-bs-target={"#"+builder['galleries_slug']} title="View gallery">
                    <img src={builder['galleries_url']} className={container.gallery_img}></img>
                    <div className={container.gallery_props}>
                        <p>{builder['created_at']}</p>
                    </div>
                    <div className={container.gallery_caption}>
                        <h4>{ucFirstWord(builder['galleries_name'])}</h4>
                        {
                            builder['galleries_desc'] != "" ?
                                <p>{ucFirstChar(builder['galleries_desc'])}</p>
                            : 
                                <></>
                        }
                    </div>
                </button>
            </div>
        </>
    )
}
  