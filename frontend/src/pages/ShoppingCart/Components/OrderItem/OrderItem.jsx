import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import deleteIcon from "./../../../../assets/svg/delete.svg";
import { toImage } from "../../../../utlis/toImage";

function OrderItem({ order, increaseFn, decreaseFn, deleteFn, orderId }) {
  const { id, product, quantity } = order;
  console.log(id, orderId);
  return (
    <div className="orderItem">
      <div className="img">
        <img src={toImage(product.primary_image)} alt="" />
      </div>
      <div className="info">
        <div className="name">
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </div>
        <div className="form">
          <Button
            onClick={() => decreaseFn(product.id)}
            className={["btn", "btn-secondary"]}
          >
            -
          </Button>
          <div className="quantity"> {quantity} </div>
          <Button
            onClick={() => increaseFn(product.id)}
            className={["btn", "btn-secondary"]}
          >
            +
          </Button>
        </div>
      </div>
      <div className="action">
        <Button
          onClick={() => deleteFn({ orderId, orderItemId: id })}
          className={["btn", "btn-secondary"]}
        >
          <img className="delete-icon" src={deleteIcon} alt="" />
        </Button>
        <div className="price">{product.price} dhs</div>
      </div>
    </div>
  );
}

export default OrderItem;
