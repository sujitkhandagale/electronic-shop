import Layout from "@/components/layouts/Layout";
import { useRouter } from "next/router";

const Products = () => {
  const router = useRouter();
  const { products } = router.query;
  return <Layout>{products}</Layout>;
};

export default Products;
