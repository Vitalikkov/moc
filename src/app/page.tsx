import Image from "next/image";
import ProductCard from "./component/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductCard/>
    </main>
  );
}
