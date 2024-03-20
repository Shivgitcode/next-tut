export default function ProducLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav>
      <li className="font-bold text-[24px]">Home</li>
      <li className="font-bold text-[24px]">about</li>
      <li className="font-bold text-[24px]">desc</li>
      {children}
    </nav>
  );
}
