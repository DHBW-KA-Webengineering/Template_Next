"use client";

import { use } from "react";
import Link from "next/link";

export default function TestPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return (
    <>
      <h1>Page with id: {id}</h1>
      <p>
        <Link href="/">Go to Startpage</Link>
      </p>
      <p>
        <Link href="/test/6">Go to Page 6</Link>
      </p>
      <p>
        <Link href="/test/7">Go to Page 7</Link>
      </p>
      <p>
        <Link href="/test/100">Go to Page 100</Link>
      </p>
      <p>
        <Link href="/test/200">Go to Page 200</Link>
      </p>
    </>
  );
}
