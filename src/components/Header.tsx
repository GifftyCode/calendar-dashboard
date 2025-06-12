import { Bell, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-xl px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4"></div>

        <div className="flex items-center gap-4">
          <button className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
            <img
              src="./Website.png"
              alt="Visit Website"
              className="w-10 h-10 mr-2"
            />
            <span className="text-bold text-black font-medium">
              Visit Website
            </span>
          </button>

          <div className="flex items-center gap-1 text-l font-medium">
            <span className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full text-red-800">
              C.O.
            </span>
            <span className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full text-red-800">
              D.A
            </span>
          </div>

          <div className="relative inline-block">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-8 h-8 text-gray-600" />
            </button>
            <span className="absolute top-2 right-3 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative inline-block">
              <img
                src="./user.png"
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
              <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
            </div>

            <div className="text-sm">
              <div className="font-bold">Deji</div>
              <div className="text-gray-500 text-l">Vendor manager</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
