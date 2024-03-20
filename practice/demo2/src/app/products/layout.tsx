type ChildrenProp = {
  children: React.ReactNode;
};

export default function ProductsLayout({ children }: ChildrenProp) {
  return (
    <div>
      <h1 className=" font-bold bg-blue-500 text-[42px]">Heading 2</h1>
      {children}
      <h1 className=" font-bold bg-red-600  text-[42px]">Heading 3</h1>
    </div>
  );
}
