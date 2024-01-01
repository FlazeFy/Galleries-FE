import GetFormTemplate from '@/components/containers/form'
import React from 'react'
import { useState, useEffect } from "react"
import Axios from 'axios'

// Component
import { getCleanTitleFromCtx } from '../../../modules/helpers/converter'
import modal from '../../../components/modals/modals.module.css'

//Font awesome classicon
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faXmark } from "@fortawesome/free-solid-svg-icons"

export default function PostGallery({ctx}) {
    //Initial variable
    const [galName, setGalName] = useState("")
    const [galDesc, setGalDesc] = useState("")
    const [galUrl, setGalUrl] = useState("")
    const [galTag, setGalTag] = useState("")
    const [galFormat, setGalFormat] = useState("")
    const [isPrivate, setIsPrivate] = useState("")

    const [resMsgGalName, setResMsgGalName] = useState("")
    const [resMsgGalDesc, setResMsgGalDesc] = useState("")
    const [resMsgGalUrl, setResMsgGalUrl] = useState("")
    const [resMsgGalTag, setResMsgGalTag] = useState("")
    const [resMsgGalFormat, setResMsgGalFormat] = useState("")
    const [resMsgIsPrivate, setResMsgIsPrivate] = useState("")
    const [resMsgAll, setResMsgAll] = useState("")

    const builder = [
        {
            type: 'text',
            class: 'form-control',
            label: 'Gallery Name',
            placeholder: 'Type gallery name',
            is_required: true,
            is_obsecure: false,
            maxLength: 75,
            handleChange: (event) => {
                setGalName(event.target.value)
            },
            errorMsg: resMsgGalName
        },
        {
            type: 'text',
            class: 'form-control',
            label: 'Gallery Desc',
            placeholder: 'Type gallery desc',
            is_required: true,
            is_obsecure: false,
            maxLength: 144,
            handleChange: (event) => {
                setGalDesc(event.target.value)
            },
            errorMsg: resMsgGalDesc
        },
        {
            type: 'text',
            class: 'form-control',
            label: 'Gallery Url',
            placeholder: 'Type gallery url',
            is_required: true,
            is_obsecure: false,
            maxLength: 36,
            handleChange: (event) => {
                setGalUrl(event.target.value)
            },
            errorMsg: resMsgGalUrl
        },
        {
            type: 'text',
            class: 'form-control',
            label: 'Gallery Tag',
            placeholder: 'Type gallery tag',
            is_required: true,
            is_obsecure: false,
            maxLength: 75,
            handleChange: (event) => {
                setGalTag(event.target.value)
            },
            errorMsg: resMsgGalTag
        },
        {
            type: 'select',
            class: 'form-control',
            label: 'Gallery Format',
            placeholder: 'Type gallery format',
            is_required: true,
            is_obsecure: false,
            maxLength: 75,
            handleChange: (event) => {
                setGalFormat(event.target.value)
            },
            errorMsg: resMsgGalFormat,
            url: 'http://127.0.0.1:1323/api/v1/dct/gallery'
        },
        // {
        //     type: 'select',
        //     class: 'form-control',
        //     label: 'Animal Category',
        //     placeholder: 'Type animal category',
        //     is_required: true,
        //     is_obsecure: false,
        //     maxLength: 36,
        //     handleChange: (event) => {
        //         setAnimalCategory(event.target.value)
        //     },
        //     errorMsg: resMsgAnimalCategory,
        //     url: 'http://127.0.0.1:1323/api/v1/dct/animal_category?page=1'
        // },
        {
            type: 'submit',
            class: 'btn btn-success rounded-pill',
            label: 'Submit',
            placeholder: null,
            toogle_disabled: false,
            handleClick: (event) => {
                handleSubmit(event)
            },
            errorMsg: resMsgAll
        }
    ]

    // Services
    const handleSubmit = async (e) => {
        try {
            const data = new FormData();
            data.append('galleries_name', galName);
            data.append('galleries_desc', galDesc);
            data.append('galleries_url', galUrl);
            data.append('galleries_tag', galTag);
            data.append('galleries_format', galFormat);
            // data.append('is_private', isPrivate);
            data.append('is_private', 0);
            
            const response = await Axios.post("http://127.0.0.1:1323/api/v1/gallery", data, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
            })
            location.reload()

            if(response.data.status != 200){
                return response.data.message
            } else {
                return ""
            }
        } catch (error) {
            setResMsgAll(error)
        }
    }

    return (
        <> 
            <button className={modal.manage_btn} data-bs-toggle="modal" data-bs-target={"#addModal"+ctx}><FontAwesomeIcon icon={faAdd}/> {getCleanTitleFromCtx(ctx)}</button>
            <div className="modal fade" id={"addModal"+ctx} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{getCleanTitleFromCtx(ctx)}</h5>
                            <button type="button" className={modal.btn_close_modal} data-bs-dismiss="modal" aria-label="Close"><FontAwesomeIcon icon={faXmark}/></button>
                        </div>
                        <div className="modal-body">
                            <GetFormTemplate type={"single-line"} props={builder} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}