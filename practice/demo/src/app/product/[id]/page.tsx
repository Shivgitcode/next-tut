

export default function Product({ params }: { params: { id: string } }) {
    return (
        <div>product details {params.id}</div>
    )
}
