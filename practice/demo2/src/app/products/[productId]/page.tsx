import { Metadata } from "next";

interface ParamsProp {
  params: {
    productId: String;
  };
}

export const generateMetadata = ({ params }: ParamsProp): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default function ProductDesc({ params }: ParamsProp) {
  return <h1>this is Product {params.productId}</h1>;
}
