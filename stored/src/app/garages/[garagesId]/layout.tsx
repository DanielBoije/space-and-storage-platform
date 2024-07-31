// Layout file for specific folder. Has to be named exactly layout.tsx. Will render in all nested routes
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h5>garage/:id route layout text</h5>
    </>
  );
}
