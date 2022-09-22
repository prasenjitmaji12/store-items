import { Card,Button } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProp = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
}
export const StoreItem = ({id, name, price, imgUrl}: StoreItemProp) => {
    console.log(id, name, price,imgUrl)
    return <Card className="h-100">
    <Card.Img
      variant="top"
      src={imgUrl}
      height="200px"
      style={{ objectFit: "cover" }}
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <span className="fs-2">{name}</span>
        <span className="ms-2 text-muted">{formatCurrency(price)}</span>
      </Card.Title>
      <div className="mt-auto">
          <Button className="w-100" onClick={() => {}}>
            + Add To Cart
          </Button>
      </div>
    </Card.Body>
  </Card>
}