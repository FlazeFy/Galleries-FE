"use client"

import GetNavbar from "@/components/navbar/navbar"
import GetAllGallery from "./usecases/getAllGallery"

  
export default function HomePage() {
    return <>
        <GetNavbar active="home"/>
        <div className="content-grid">
            <GetAllGallery ctx="get_all_gallery"/>
        </div>
    </>
}