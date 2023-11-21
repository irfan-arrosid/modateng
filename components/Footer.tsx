import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-base text-base-100 mt-8 px-2.5 sm:px-5 lg:px-10">
      <aside className="items-center grid-flow-col">
        <div>© 2023 Modateng</div>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <ul className="grid grid-cols-2 sm:flex gap-6 font-extralight">
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Cookie Policy</Link>
          <Link href="#">Help</Link>
        </ul>
      </nav>
    </footer>
  );
}
