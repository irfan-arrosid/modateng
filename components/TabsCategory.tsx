import Link from "next/link";

export default function TabsCategory() {
  return (
    <div className="browse-categories mt-4">
      <ul className="flex gap-8 sm:gap-10 font-bold overflow-x-auto">
        <li>
          <Link
            className="text-light-gray hover:text-black active:text-secondary hover:underline"
            href="#"
          >
            All
          </Link>
        </li>
        <li>
          <Link
            className="text-light-gray hover:text-black hover:underline"
            href="#"
          >
            Music
          </Link>
        </li>
        <li>
          <Link
            className="text-light-gray hover:text-black hover:underline"
            href="#"
          >
            Business
          </Link>
        </li>
        <li>
          <Link
            className="text-light-gray hover:text-black hover:underline"
            href="#"
          >
            Hobbies
          </Link>
        </li>
        <li>
          <Link
            className="text-light-gray hover:text-black hover:underline"
            href="#"
          >
            Sport
          </Link>
        </li>
        <li>
          <Link
            className="text-light-gray hover:text-black hover:underline"
            href="#"
          >
            Health
          </Link>
        </li>
      </ul>
    </div>
  );
}
