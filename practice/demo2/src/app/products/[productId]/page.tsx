interface ParamsProp {
  params: {
    productId: String;
  };
}

export default function ProductDesc({ params }: ParamsProp) {
  return <h1>this is Product {params.productId}</h1>;
}
