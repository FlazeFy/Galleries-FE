"use client"

import GetNavbar from "@/components/navbar/navbar"
import GetBreakLine from "@/components/others/breakLine"
import GetAllGallery from "./usecases/getAllGallery"
import GetAllMyTag from "./usecases/getAllMyTag"
import PostDctTag from "./usecases/postDct"
import PostGallery from "./usecases/postGallery"

  
export default function HomePage() {
    return <>
        <GetNavbar active="home"/>
        <div className="content-grid">
            <PostGallery ctx="post_gallery"/>
            <PostDctTag ctx="post_tag"/>
            <GetBreakLine length={1}/>
            <GetAllMyTag ctx="get_all_my_tag"/>
            <GetAllGallery ctx="get_all_gallery"/>
        </div>
    </>
}