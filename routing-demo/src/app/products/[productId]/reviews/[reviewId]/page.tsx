
export default function page({ params }: { params: { reviewId: string } }) {
    return (
        <h1>review {params.reviewId}</h1>
    )
}
