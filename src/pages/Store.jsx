
import {useEffect,useState,useMemo} from 'react'
import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import useClientApi from "../hooks/Contentful";

export const Store = () => {
    const items = useClientApi();
    const itemRows = useMemo(()=>(
        <Row md={2} xs={1} lg={3} className="g-3">
            {items?.map((item,index)=>{
            return(
                <Col key={index}>
                    <StoreItem {...item} />
                </Col>
            )})}
        </Row>
    ),[items])
    return <>
        <h1>Store</h1>
        {itemRows}
    </>
}