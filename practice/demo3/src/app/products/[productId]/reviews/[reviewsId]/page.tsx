interface Params {
  productId: string;
  reviewsId: string;
}

export default function singleReview({ params }: { params: Params }) {
  return (
    <div>
      this is product page {params.productId} and this is review{" "}
      {params.reviewsId}
    </div>
  );
}
