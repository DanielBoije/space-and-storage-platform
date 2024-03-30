// The [...slug] document catches all nested routes. This file will be the content for ./docs/*/*....
// By adding [[...slug]] the ./docs route will also return the files content
export interface DocsProps {
  params: { slug: string[] }; // has to be exactly slug because has to be the same as [...folder] name
}
export default function Docs({ params }: DocsProps) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Docs for feature {params.slug[0]}</h1>;
  }
  return <h1>Docs page</h1>;
}
