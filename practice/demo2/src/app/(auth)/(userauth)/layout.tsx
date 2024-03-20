export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>Inside userauth</p>
      {children}
    </div>
  );
}
