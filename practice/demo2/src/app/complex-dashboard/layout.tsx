export default function layout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <div>
      {children}

      <div className=" flex ">
        <div className=" flex flex-col">
          <div className=" border-blue-300 border-2">{users}</div>
          <div className="border-red-300 border-2">{revenue}</div>
        </div>
        <div className=" border-violet-600 border-2">{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
