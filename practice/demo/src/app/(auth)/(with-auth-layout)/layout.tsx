export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>inner layout</h2>
      {children}
    </div>
  );
}
