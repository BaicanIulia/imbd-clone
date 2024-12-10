'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/search/${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={!searchTerm}
      >
        Search
      </button>
    </form>
  );
};
