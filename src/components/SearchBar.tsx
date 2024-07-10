"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

function SearchBar() {
  const router = useRouter();
  const LIST_ROUTE = "/list?name=";

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;

    if (name) router.push(LIST_ROUTE + name);
  };
  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        name="name"
        type="text"
        placeholder="Search"
        className="flex-1 bg-transparent focus:outline-none"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  );
}

export default SearchBar;
