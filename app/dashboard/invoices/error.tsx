"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <main className="h-full flex flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-indigo-500 px-4 text-sm text-white transition-colors hover:bg-indigo-400"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
