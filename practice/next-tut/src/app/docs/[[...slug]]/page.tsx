export default function Docs({ params }: { params: { slug: string[] } }) {
    console.log(params)
    if (params.slug?.length === 1) {
        return (
            <h1>this is {params.slug[0]}</h1>
        )
    }
    else if (params.slug?.length === 2) {
        return (
            <h1>this is {params.slug[0]} and topic {params.slug[1]}</h1>
        )
    }
    return (
        <h1>Docs home page</h1>
    )
}