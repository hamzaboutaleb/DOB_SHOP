import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Loader from "../../components/loader/Loader";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Review from "./components/Review/Review";
import { useGetProduct } from "./hooks/useGetProduct";

function Product() {
  const { data, isLoadingProduct } = useGetProduct();

  if (isLoadingProduct) return <Loader />;

  const breadcrubmItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: data?.name,
      href: "",
    },
  ];
  return (
    <div className="container">
      <Breadcrumb className="margin-t-5" items={breadcrubmItems} />
      <ProductDetails data={data} isLoading={isLoadingProduct} />
      <Review />
    </div>
  );
}

export default Product;
