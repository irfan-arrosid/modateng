import Link from "next/link";

export default function CardEvent() {
  return (
    <Link className="card rounded-lg w-full bg-base-100 shadow-xl" href="#">
      <figure className="bg-neutral min-h-[170px]"></figure>
      <div className="px-5 py-5">
        <div className="text-neutral font-bold text-2xl">
          Indonesia 4.0 Conference & Expo
        </div>
        <div className="text-secondary font-bold text-base">
          Sun, Aug 23, 9:00 AM
        </div>
        <div className="text-light-gray text-base mt-4">
          JIEXPO Kemayoran - Central Jakarta, Jakarta
        </div>
        <div className="text-light-gray text-base">Free</div>
        <div className="text-neutral font-medium text-base mt-4">
          Naganaya in collaboration with Ministry of Industry and WANTRII
        </div>
      </div>
    </Link>
  );
}
