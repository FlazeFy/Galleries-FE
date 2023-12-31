"use client"

import GetNavbar from "@/components/navbar/navbar"
import GetAllGallery from "./usecases/getAllGallery"
import PostGallery from "./usecases/postGallery"

  
export default function HomePage() {
    return <>
        <GetNavbar active="home"/>
        <div className="content-grid">
            <PostGallery ctx="post_gallery"/>
            <GetAllGallery ctx="get_all_gallery"/>
        </div>
    </>
}