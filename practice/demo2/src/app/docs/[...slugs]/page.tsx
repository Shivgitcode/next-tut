export default function Docs({ params }: { params: { slugs: string[] } }) {
  if (params.slugs.length > 1) {
    return <div></div>;
  }

  return <div>Docs home page</div>;
}
