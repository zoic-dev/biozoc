"use client";

import Head from "next/head";

export default function YoastHead({ html }) {
  if (!html) return null;

  return <Head dangerouslySetInnerHTML={{ __html: html }} />;
}
