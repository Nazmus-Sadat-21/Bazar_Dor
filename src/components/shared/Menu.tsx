import Link from "next/link";

interface Category {
  id: string | number;
  slug: string;
  nameBn: string;
  icon?: string;
}

const getMenuData = async (): Promise<Category[]> => {
  try {
    const res = await fetch(
      "https://api.api-store.workers.dev/api/bazardor/categories", { next: { revalidate: 3600 } }
      
    );
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch menu data:", error);
    return [];
  }
};

const MenuPage = async () => {
  const data = await getMenuData();
 

  return (
    <nav className="w-full border-b border-gray-100 bg-white ">
      {/* Same max-width and padding container as Navbar for aligned margins */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-aligned scrollable category row */}
        <div className=" flex items-center gap-6 sm:gap-7 md:gap-8 overflow-x-auto py-3 justify-start whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {data.map((e) => (
            <Link
              key={e.id}
              href={`/Category/${e.id}`}
              className="flex items-center gap-1 text-sm focus:text-[#008a4c]  focus:text-2xl sm:text-base font-medium text-gray-800 hover:text-[#008a4c] transition-colors shrink-0 py-1"
            >
              {e.icon && <span className="text-base sm:text-lg">{e.icon}</span>}
              <span>{e.nameBn}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MenuPage
