import GetButtonTag from '@/components/buttons/button_tag'
import GetGalleryContainer from '@/components/containers/gallery'
import React from 'react'
import { useState, useEffect } from "react"

// Modules
import { getLocal, storeLocal } from '../../../modules/storages/local'

export default function GetAllMyTag({ctx}) {
    //Initial variable
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:1323/api/v1/dct/tag/my`)
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
            <div className='mt-2'> 
                <h4>All Tags</h4>
                {
                    items.map((data, i, idx) => {
                        return (
                            <GetButtonTag name={data['dictionary_name']}/>
                        );
                    })
                }
            </div>
        )
    }
}
  