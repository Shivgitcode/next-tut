import { notFound } from "next/navigation"

export default function ({ params }: { params: { id: string, reviewId: string } }) {
    if (parseInt(params.reviewId) > 1000) {
        notFound()

    }
    return (
        <div>page {params.id} {params.reviewId}</div>
    )
}
