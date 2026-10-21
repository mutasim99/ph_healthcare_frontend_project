export default function CommonProtectedLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <h2>Common Protected Layout</h2>
      {children}
    </>
  );
}
