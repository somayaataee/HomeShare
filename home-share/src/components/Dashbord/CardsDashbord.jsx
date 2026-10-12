import { CreditCardIcon, DollarSign, SigmaIcon } from "@animateicons/react/lucide";

export default function CardsDashbord(){

    const infoDashbordCards = [
        {icon:<SigmaIcon size={20} />,title:'Total this Month',price:'$ 420',iconBg:'bg-green-700',caption:'+ 12% from last month'},
        {icon:<DollarSign size={20} />,title:'Recent Expense',price:'5 items',iconBg:'bg-purple-700',caption:'last 7 days'},
        {icon:<CreditCardIcon size={20} />,title:'Credit',price:'$ 50',iconBg:'bg-orange-400',caption:'You are owed'},
    ]
    return(
        <>
        <div className=" text-white grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {infoDashbordCards.map((cardItem)=>(
            <div className="animateTop rounded-2xl border border-white/20 p-3 bg-blue-500/20">
                <div className={`flex justify-center items-center rounded-2xl h-15 w-15 ${cardItem.iconBg}`}>{cardItem.icon}</div>
                <h3 className="pt-5 text-xl" >{cardItem.title} </h3>
                <p className="font-bold py-2">{cardItem.price}</p>
                <p className="text-gray-400">{cardItem.caption}</p>
                </div>
            ))}
        </div>
        </>
    );
}