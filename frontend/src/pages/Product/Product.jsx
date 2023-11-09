import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Loader from "../../components/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { getBySlug } from "../../services/productsApi";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Review from "./components/Review/Review";

function Product() {
  const { slug } = useParams();
  const { data, isLoading: isLoadingProduct } = useQuery({
    queryKey: ["prodict", slug],
    queryFn: () => getBySlug(slug),
  });

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
