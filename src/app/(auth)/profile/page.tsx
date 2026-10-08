
import Image from "next/image";

export default function ProfilePage() {
//   const [name, setName] = useState("Rezwan Ahmed");
//   const email = "rezwanahmed@gmail.com";

//   const handleUpdate = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("নাম সফলভাবে আপডেট করা হয়েছে!");
//   };

//   const handleSignOut = () => {
//     alert("সাইন আউট করা হচ্ছে...");
//   };

  return (
    <div className="min-h-screen bg-[#f5f7f6] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Page Header */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            আমার প্রোফাইল
          </h1>
          <p className="text-sm text-gray-600 font-medium">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* 1. User Header Badge Card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* User Avatar */}
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-gray-100 shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
                alt="Profile picture"
                fill
                className="object-cover"
              />
            </div>

            {/* Name & Email */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 leading-snug">
                {/* {name} */}
                Rezwan Ahmed
              </h2>
              <p className="text-sm text-gray-500 font-medium">rezwanahmed@gmail.com</p>
            </div>
          </div>

          {/* Sign Out Button */}
          <button
            // onClick={handleSignOut}
            type="button"
            className="cursor-pointer inline-flex items-center justify-center gap-1.5 border border-red-500 hover:bg-red-50 text-red-600 text-sm font-semibold px-4 py-2 rounded-xl transition-colors shrink-0 active:scale-95"
          >
            <span>↵</span>
            <span>সাইন আউট</span>
          </button>
        </div>

        {/* 2. Update Information Form Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xs space-y-6">
          <h3 className="text-xl font-bold text-gray-900">তথ্য</h3>

          <form  className="space-y-5">
            {/* Name Input */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-sm font-bold text-gray-800">
                নাম
              </label>
              <input
                id="name"
                type="text"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                placeholder="আপনার নাম লিখুন"
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#008a4c] focus:ring-1 focus:ring-[#008a4c] transition-all"
                required
              />
              <label htmlFor="name" className="block text-sm font-bold text-gray-800">
                ইমেজ
              </label>
               <input
                id="img"
                type="text"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                placeholder="ইমেজ url"
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#008a4c] focus:ring-1 focus:ring-[#008a4c] transition-all"
                required
              />
            </div>

            {/* Update Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="cursor-pointer bg-[#008a4c] hover:bg-[#007540] text-white font-bold text-sm px-8 py-2.5 rounded-xl transition-all shadow-xs active:scale-95"
              >
                আপডেট
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}