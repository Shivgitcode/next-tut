interface ParamsProp {
  params: {
    reviewId: string;
    productId: string;
  };
}

export default function ReviewsDesc({ params }: ParamsProp) {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 1) {
    throw new Error("this is app error");
  }
  return (
    <h2>
      this is reviews {params.reviewId} and product is {params.productId}
    </h2>
  );
}
