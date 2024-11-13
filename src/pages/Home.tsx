import Sidebar from "@/components/Sidebar";
import BottonNav from "@/components/BottomNav";
import Links from "@/components/Links";

const Home = () => {
  return (
    <>
      <div className="flex">
        {/* Sidebar for larger screens */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1"><Links/></div>

        {/* Bottom Navigation for smaller screens */}
        <div className="md:hidden sm:block w-full fixed bottom-0 left-0 z-50">
          <BottonNav />
        </div>
      </div>
    </>
  );
};

export default Home;
