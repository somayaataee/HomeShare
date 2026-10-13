import { BellElectric, FolderDot, WalletCards, WifiIcon } from "@animateicons/react/lucide";

export default function RecentExpenses(){
    const expenseDate = new Date();

    const RecentShowData =[
        {icon:<BellElectric/>,title:'Electricity',praice:'$ 60',iconBg:'bg-purple-500'},
        {icon:<FolderDot/>,title:'Groceries',iconBg:'bg-purple-500',praice:'$ 120'},
        {icon:<WifiIcon/>,title:'Internet',iconBg:'bg-purple-500',praice:'$ 40'},
        {icon:<WalletCards/>,title:'Water',iconBg:'bg-purple-500',praice:'$ 80'},
    ];

    
    return(
        <>
        <div className="animateShadow w-[90%] border rounded-2xl mt-10 border-white/15 bg-blue-950/40 p-7 ">            
            <h1 className="py-5 font-bold">Recent Expenses</h1>
            {RecentShowData.map((showData)=>(
            <div>
                <div className="justify-between flex my-4 items-center">
                    <div className="flex">
                     <span className={`p-2 rounded-2xl ${showData.iconBg}`}>{showData.icon}</span>
                     <div className="px-3">
                        <h3> {showData.title}</h3>
                        <p className="text-gray-400">{expenseDate.toLocaleString()}</p>
                     </div>
                    </div>
                    <div>
                        {showData.praice}
                        <p className="bg-green-400 rounded-2xl w-15 px-4">paid</p>
                    </div>
                </div>
                <hr className=" border-white/9 border-2 mb-5"/>
            </div>
            ))}

        </div>
        
        
        </>
    );
}