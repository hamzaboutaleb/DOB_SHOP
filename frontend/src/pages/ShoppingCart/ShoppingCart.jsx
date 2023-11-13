import { useMutation, useQuery } from "@tanstack/react-query";
import Button from "../../components/button/Button";
import "./styles.css";
import {
  decreaseQuantity,
  deleteOrderItem,
  getOrders,
  increaseQuantity,
} from "../../services/orderApi";
import Loader from "../../components/loader/Loader";
import OrderItem from "./Components/OrderItem/OrderItem";
function ShoppingCart() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(),
  });
  const { mutate: increase } = useMutation({
    mutationFn: increaseQuantity,
    onSuccess: () => refetch(),
  });
  const { mutate: decrease } = useMutation({
    mutationFn: decreaseQuantity,
    onSuccess: () => refetch(),
  });
  const { mutate: deleteItem } = useMutation({
    mutationFn: deleteOrderItem,
    onSuccess: () => refetch(),
  });

  if (isLoading)
    return (
      <div className="container">
        <Loader />
      </div>
    );
  const order =
    data.data.filter((order) => order.status == "pending").at(0) || [];
  const id = order.id;
  return (
    <div className="container">
      <div className="orders">
        <h2 className="title">your cart</h2>
        <div className="orderList">
          {order.items.map((order) => (
            <OrderItem
              key={order.id}
              order={order}
              orderId={id}
              increaseFn={increase}
              decreaseFn={decrease}
              deleteFn={deleteItem}
            />
          ))}
        </div>
        <div className="checkout">
          <div className="total">
            <h3>Total Price</h3>
            <h3>{order.total_amount} Dhs</h3>
          </div>
          <Button className={["btn", "primary-1", "btn-checkout"]}>
            CHECKOUT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
