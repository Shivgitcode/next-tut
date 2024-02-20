
export default function BlogsId({ params }: { params: { blogsId: string } }) {
    // console.log(params)
    return (
        <div>This is blog {params.blogsId}</div>
    )
}
