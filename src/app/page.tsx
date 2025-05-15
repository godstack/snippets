import { db } from '@/db';
import Link from 'next/link';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((item) => (
    <Link
      key={item.id}
      href={`/snippets/${item.id}`}
      className='flex justify-between items-center p-2 border rounded'
    >
      <span>{item.title}</span>
      <span>View</span>
    </Link>
  ));

  return (
    <div>
      <header className='flex m-2 justify-between items-center'>
        <h1 className='text-xl font-bold'>Snippets</h1>
        <Link href='snippets/new' className='border p-2 rounded'>
          New
        </Link>
      </header>
      <div className='flex flex-col gap-2'>{renderedSnippets}</div>
    </div>
  );
}
