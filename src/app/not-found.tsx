import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-semibold mb-4">Not Found</h2>
      <p className="text-lg mb-4">Could not find the requested resource.</p>
      <Link
        href="/"
        className="bg-black px-4 py-3 rounded-lg text-white text-sm"
      >
        Return Home
      </Link>
    </div>
  );
}
