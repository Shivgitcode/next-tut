interface ParamsProp {
  params: {
    reviewId: string;
    productId: string;
  };
}

export default function ReviewsDesc({ params }: ParamsProp) {
  return (
    <h2>
      this is reviews {params.reviewId} and product is {params.productId}
    </h2>
  );
}
