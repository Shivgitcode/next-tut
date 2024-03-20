export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ border: "2px black solid" }}>{users}</div>
          <div style={{ border: "2px black solid" }}>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1, border: "2px black solid" }}>
          {notifications}
        </div>
      </div>
    </div>
  );
}
