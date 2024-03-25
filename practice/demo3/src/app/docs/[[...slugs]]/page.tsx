interface Params {
  slugs: string[];
}

export default function docs({ params }: { params: Params }) {
  //   console.log(params);
  if (params.slugs?.length > 1) {
    return <div>{params.slugs[params.slugs.length - 1]}</div>;
  } else if (params.slugs?.length === 0) {
    return <div>{params.slugs[0]}</div>;
  }

  return <div>this is docs page</div>;
}
