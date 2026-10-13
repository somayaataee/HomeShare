import user1 from './../../../assets/images/1.jpg';
import user2 from '../../../assets/images/2.jpg';
import user3 from '../../../assets/images/3.png';
import user4 from '../../../assets/images/4.png';
export default function DebitStatus(){

    const RecentShowData =[
        {image:user1,title:'Electricity',praice:'$ 60',state:'You are owed'},
        {image:user2,title:'Groceries',praice:'$ 120',state:'Owes you'},
        {image:user3,title:'Internet',praice:'$ 40',state:'You are owed'},
        {image:user4,title:'Water',praice:'$ 80',state:'Owes you'},
    ];

    
    return(
        <>
        <div className="animateShadow w-[90%] border rounded-2xl mt-10 border-white/15 bg-blue-950/40 p-7 ">            
            <h1 className="py-5 font-bold">Debt/Credit Status</h1>
            {RecentShowData.map((showData)=>(
            <div>
                <div className="justify-between flex my-4 items-center">
                    <div className="flex">
                     <img src={showData.image} alt={showData.title} className='h-10 w-10 rounded-2xl object-cover' />
                     <div className="px-3">
                        <h3> {showData.title}</h3>
                        <p className="text-gray-500">{showData.state}</p>
                     </div>
                    </div>
                    <div>
                        {showData.praice}
                    </div>
                </div>
                <hr className=" border-white/9 border-2 mb-5"/>
            </div>
            ))}

        </div>
        
        
        </>
    );
}