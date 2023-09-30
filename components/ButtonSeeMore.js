import Link from "next/link";

export default function ButtonSeeMore() {
  return (
    <div className="flex justify-center">
      <div className="w-2/3 sm:w-1/3 mt-8 text-center">
        <Link
          className="btn btn-outline w-full normal-case font-medium text-base"
          href="#"
        >
          See more
        </Link>
      </div>
    </div>
  );
}
