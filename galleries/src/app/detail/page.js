"use client"

import GetNavbar from "@/components/navbar/navbar"
import GetGalleryDetail from "./usecases/getGalleryDetail"
  
export default function DetailPage() {
   
    return <>
        <GetNavbar active="detail"/>
        <div className="content-grid">
            <GetGalleryDetail ctx="get_gallery_detail"/>
        </div>
    </>
}