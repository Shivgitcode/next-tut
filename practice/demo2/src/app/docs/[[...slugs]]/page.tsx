export default function Docs({ params }: { params: { slugs: string[] } }) {
  if (params.slugs?.length > 1) {
    return (
      <div>{`${params.slugs[params.slugs.length - 1]} ${params.slugs[0]}`}</div>
    );
  } else if (params.slugs?.length === 0) {
    return <div>{params.slugs[0]}</div>;
  }

  return <div>Docs home page</div>;
}
