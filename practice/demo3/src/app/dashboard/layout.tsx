// import login from "../(auth)/login/page";

export default function layout({
  children,
  admin,
  users,
  notifications,
  login,
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <div>
      {children}
      <div className="flex flex-1">
        <div className="border-2 border-black">{admin}</div>
        <div className="flex flex-col">
          <div className="border-2 border-red-400 ">{users}</div>
          <div className="border-2 border-red-600">{notifications}</div>
        </div>
      </div>
    </div>
  ) : (
    login
  );
}
