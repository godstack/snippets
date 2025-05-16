'use client';

type TProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: TProps) {
  return <div>{error.message}</div>;
}
