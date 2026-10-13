import Sidbar from "../components/Layout/Sidbar";

export default function Expenses() {

  const expenses =[
    {id:1,date:'123/33',description:'Electrecity',amount:'$60',paidBy:'Somaya',action:'🗑️'},
    {id:2,date:'12/03',description:'Groceries',amount:'$120',paidBy:'Hasib',action:'🗑️'},
    {id:3,date:'23/23',description:'Internet',amount:'$80',paidBy:'Ahmad',action:'🗑️'},
    {id:4,date:'2/23',description:'Water',amount:'$100',paidBy:'Ali',action:'🗑️'},
    {id:5,date:'32/56',description:'Cleaning',amount:'$30',paidBy:'Hania',action:'🗑️'},
  ];
  const Head =['Date','Description','Amount','PaidBy','Action']
  return (
    <>
    
    <div className="min-h-screen flex">
        <div className="md:block hidden">
          <Sidbar />
        </div>
        {/* -------main content------ */}
        <main className="flex-1 min-w-0 md:ml-77 mt-5 mx-5 text-white ">
            <header className="flex justify-between items-center gap-8 mb-10">
                <div>
                    <h1 className="text-2xl font-bold">Expenses</h1>
                    <p className="text-gray-400">Manage your home expenses.</p>
                </div>
               <button className="bg-blue-700 px-2 rounded h-10 shrink-0">➕ Add Expenses </button>
            </header>
            
              {/* ------ table of expenses------ */}
            <section className="border-white/30 border rounded-2xl overflow-hidden">
              <table className=" rounded-2xl w-full bg-blue-900/40 ">
                <thead className="bg-gray-500">
                  <tr  className="">
                  {Head.map((topHead)=>(
                    <th key={topHead} className="td-Style">{topHead}</th>
                  ))}
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-500">
                  {expenses.map((expenItem)=>(
                      <tr className="hover:bg-slate-400/20 hover:transition-transform hover:scale-[1.01] duration-200 p-4" key={expenItem.id}>
                        <td className="td-Style">{expenItem.date}</td>
                        <td className=" td-Style">{expenItem.description}</td>
                        <td className="td-Style">{expenItem.amount}</td>
                        <td className="td-Style">{expenItem.paidBy}</td>
                        <button className="bg-red-500/60 rounded-2xl px-5 py-2 my-2">{expenItem.action}</button>
                      </tr>
                  ))}
                  
                </tbody>
              </table>
            </section>
        </main>
    </div>
    </>
  );
}
