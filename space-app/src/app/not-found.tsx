// Custom not-found component. Revert back to default NextJs not-found page by removing this file
// not-found.tsx files can also be added to specific route folder level for customizing the not-found page in a specific route
export default function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <p>Could not find specific route</p>
    </>
  );
}
