export default function productDesc({
  params,
}: {
  params: { productId: string };
}) {
  //   console.log(params);
  return <div>this is product Page {params.productId}</div>;
}
