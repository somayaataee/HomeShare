import AddExpenses from "../components/Expenses/AddExpenses";
import Sidbar from "../components/Layout/Sidbar";

export default function Member(){
    return(
        <div className="min-h-screen flex">
            <div className="md:block hidden">
                <Sidbar/>
            </div>
            <div className="md:ml-77 mx-2">
            <AddExpenses/>
            </div>
        </div>
    );
}