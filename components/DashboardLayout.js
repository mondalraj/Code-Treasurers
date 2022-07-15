export default function DashboardLayout({ children }) {
  return (
    <>
      <div>Navbar</div>
      <main>{children}</main>
      <div>Footer</div>
    </>
  );
}
