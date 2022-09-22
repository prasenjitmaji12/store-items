import { useState, useEffect } from 'react';
import { client } from './client';

const useClientApi = () => {
    const [items, setStoreItems] = useState();
    useEffect(() => {
        client.getEntries({content_type:'storeItems'})
        .then(response=>{
            const redefinedResp = response?.items?.map(item=>({
                id: item?.fields?.id,
                name: item?.fields?.name,
                price: item?.fields?.price,
                imgUrl: item?.fields?.itemImage?.fields?.file?.url
            }))
            setStoreItems(redefinedResp)
        }).catch(error=>console.log(error))
    },[])
    return items
}

export default useClientApi;