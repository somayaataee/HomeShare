import AddExpenses from "../components/Expenses/AddExpenses";
import Sidbar from "../components/Layout/Sidbar";

export default function Member(){
    return(
        <div className="min-h-screen flex">
            <div className="md:block hidden">
                <Sidbar/>
            </div>
            <main className="flex-1 min-w-0 md:ml-77 mx-10 my-6">
                <header className="flex justify-between">
                    <div>
                        <h1 className="font-bold text-2xl">Member</h1>
                        <p>House members and their shares.</p>
                    </div>
                <button className="bg-blue-700 px-2 rounded h-10 shrink-0"> ➕Add Member</button>
                </header>
            </main>
            {/* ----members list ---- */}
            <div>
                <ul>
                    {}
                </ul>
            </div>
        </div>
    );
}