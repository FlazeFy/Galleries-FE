"use client"

import GetNavbar from "@/components/navbar/navbar"
import GetAllGallery from "./usecases/getAllGallery"
import PostDctTag from "./usecases/postDct"
import PostGallery from "./usecases/postGallery"

  
export default function HomePage() {
    return <>
        <GetNavbar active="home"/>
        <div className="content-grid">
            <PostGallery ctx="post_gallery"/>
            <PostDctTag ctx="post_tag"/>
            <GetAllGallery ctx="get_all_gallery"/>
        </div>
    </>
}