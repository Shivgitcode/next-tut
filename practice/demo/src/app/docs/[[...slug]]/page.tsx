export const metadata = {
  title: "Docs",
};

export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 2) {
    return <div>{params.slug[1]}</div>;
  } else if (params.slug?.length <= 2) {
    return <div>{params.slug[0]}</div>;
  }
  return <div>docs page</div>;
}
