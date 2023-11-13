import React from 'react'
import { useState, useEffect } from "react"

// Modules JS
import { getLocal, storeLocal } from '../../../modules/storages/local'
import { parseJSON } from '@/modules/helpers/decode'

// Component
import GetGalleryContainer from '@/components/containers/gallery'
import GetButtonPath from '@/components/buttons/button_path'
import GetBreakLine from '@/components/others/breakLine'
import GetButtonUser from '@/components/buttons/button_user'

export default function GetGalleryDetail({ctx}) {
    //Initial variable
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:1323/api/v1/gallery/frikk`)
        .then(res => res.json())
            .then(
            (result) => {
                setIsLoaded(true)
                setItems(result.data)        
            },
            (error) => {
                if(getLocal(ctx + "_sess") !== undefined){
                    setIsLoaded(true)
                    setItems(JSON.parse(getLocal(ctx + "_sess")))
                } else {
                    setIsLoaded(true)
                    setError(error)
                }
            }
        )
    },[])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return (
            <div>
                <h5 className='text-center text-white mt-2 fst-italic'>Loading...</h5>
            </div>
        )
    } else {

        return (
            <div className='row'> 
                {
                    items.map((data, i, idx) => {
                        let tagArr = []
                        if(data['galleries_tag']){
                            tagArr = parseJSON(data['galleries_tag'])
                        }

                        return (
                            <>
                                <div className='col-4'>
                                    <GetGalleryContainer key={i} builder={data} is_detailed={false}/>
                                </div>
                                <div className='col-8'>
                                    <h2>{data['galleries_name']}</h2>
                                    {
                                        tagArr.map((tg, i, idx) => {
                                            return (
                                                <GetButtonPath slug={tg['slug_name']} name={tg['tag_name']}/>
                                            )
                                        })
                                    }
                                    <GetBreakLine key={i} length={2}/>
                                    <p>{data['galleries_desc']}</p>
                                    <hr></hr>
                                    <h6>Posted By</h6>
                                    <GetButtonUser name={data['created_by']} date={data['created_at']}/>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        )
    }
}
  