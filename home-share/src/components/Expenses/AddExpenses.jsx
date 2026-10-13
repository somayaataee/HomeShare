export default function AddExpenses(){
    return(
        <>
        <div>
            <h1 className="font-bold text-red-500">Add New Expenses</h1>

            <form action="" className=" border rounded-2xl p-6 bg-blue-900/20">
                    <div className="grid grid-cols-2 justify-baseline ">
                        <label htmlFor="">Description :</label>
                        <input className="inputStyle justify-baseline" type="text" placeholder="e.g Electricity" />

                        <label htmlFor="">Date :</label>
                        <input className="inputStyle " type="date" placeholder="2026-10-13"/>
                    </div>

                    <div className="grid grid-cols-2">
                        <label htmlFor="">Amount :</label>
                        <input className="inputStyle " type="text"  placeholder="e.g 60$"/>

                        <label htmlFor="">Paid By :</label>
                        <select className="inputStyle bg-blue-900/20" name="" id="">
                            <option value="">Select Member</option>
                            <option value="">Soamya jan</option>
                            <option value="">Hasib jan</option>
                            <option value="">Neda jan</option>
                        </select>
                    </div>
                    <div className=""> 
                        <button className="px-5 py-2 mr-5 border rounded-2xl border-white bg-blue-700 hover:bg-white hover:text-blue-900 hover:border-blue-900">Add</button>
                        <button className="border rounded-2xl px-5 py-2 hover:bg-blue-900 ">Cancel</button>
                    </div>
            </form>
        </div>
        
        
        
        </>
    );
}