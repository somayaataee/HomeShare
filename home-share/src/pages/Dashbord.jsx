import Sidbar from "../components/Sidbar";
import ProfileImage from "../assets/images/content-girl.png";
import CardsDashbord from "../components/Dashbord/CardsDashbord";
import RecentExpenses from "../components/Dashbord/sections/RecentExpenses";
import DebitStatus from "../components/Dashbord/sections/Debit-Status";

export default function Dashbord() {
  return (
    <>
        <div className="flex min-h-screen">
          <div className="hidden md:block ">
            <Sidbar />
          </div>
          {/* ------------main content----------------- */}
          <main className="min-w-0 flex-1 md:ml-77 mx-4 mt-8 text-white">
            <header className="flex justify-between items-center gap-8 mb-10">
              <div>
              <h1 className="text-2xl font-bold">Hello!</h1>
              <p className="text-gray-400">
                Here's what's happening with your home Expenses.
              </p>
            </div>
            <div>
              <img
                className="size-20 border border-white/20 rounded-4xl object-cover"
                src={ProfileImage}
                alt="profile"
              />
            </div>
            </header>
            {/* ----------------cards----------- */}
                <CardsDashbord />
                <div className="grid md:grid-cols-2">
                  <RecentExpenses/>
                  <DebitStatus/>
                </div>
          </main>
        </div>

      
    </>
  );
}
