import Sidbar from "../components/Layout/Sidbar";
import member1 from '../assets/images/2.jpg';
import member2 from '../assets/images/3.png';
import member3 from '../assets/images/4.png';
import {Trash } from "@animateicons/react/lucide";

const memberData=[
    {id:1,picture:member1,name:'hasib',share:'50%',status:'paid',role:'Admin',icon:<Trash size={16}/>},
    {id:2,picture:member2,name:'somaya',share:'30%',status:'unpaid',role:'Member',icon:<Trash size={16}/>},
    {id:3,picture:member3,name:'hasib',share:'20%',status:'paid',role:'Member',icon:<Trash size={16}/>},

]
const head =['MEMBER','MONTHLY-SHRE','ROLE','STATUS','ACTION'];

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

            {/* ---- Members List ---- */}
            <div className="my-5 rounded-2xl border border-white/20 bg-blue-900/30 p-4 sm:p-6">

            <div className="mb-5 gap-3">
                <div>
                <h2 className="text-lg font-semibold text-white">
                    All Members
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                    {memberData.length} members in your home
                </p>
                </div>
            </div>

            <hr className="mb-5 border-white/20" />

            <div className="overflow-x-auto rounded-xl border border-white/20">
                <table className="w-full min-w-[650px] text-left text-sm text-slate-200">
                <thead className="bg-gray-500/80 text-xs uppercase tracking-wider text-white">
                    <tr>
                    {head.map((headItem) => (
                        <th
                        className="whitespace-nowrap px-5 py-4 font-medium"
                        key={headItem}
                        >
                        {headItem}
                        </th>
                    ))}
                    </tr>
                </thead>

                <tbody className="divide-y divide-slate-700/60">
                    {memberData.map((memberItem) => (
                    <tr
                        key={memberItem.id}
                        className="transition-colors duration-200 hover:bg-slate-700/50"
                    >
                        <td className="whitespace-nowrap px-5 py-4 font-medium text-white flex items-center gap-3">
                        <img className="h-10 w-10 rounded-full" src={memberItem.picture} alt="" />
                        {memberItem.name}
                        </td>

                        <td className="whitespace-nowrap px-5 py-4">
                        {memberItem.share}
                        </td>

                        <td className="whitespace-nowrap px-5 py-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                            memberItem.role === "Admin"
                            ? "bg-blue-700/70 text-blue-200"
                            : "bg-purple-500/30 text-slate-300"
                        }`}>
                            {memberItem.role}
                        </span>
                        </td>

                        <td className="whitespace-nowrap px-5 py-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                            memberItem.status === "paid"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : "bg-amber-500/15 text-red-400"
                        }`}>
                            {memberItem.status}
                        </span>
                        </td>

                        <td className="whitespace-nowrap px-5 py-4">
                        {memberItem.icon}
                        </td>
                    </tr>
                    ))}
                </tbody>

                </table>
            </div>
            </div>

            </main>
            
        </div>
    );
}