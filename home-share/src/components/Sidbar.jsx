import {HouseIcon,UserIcon,DollarSignIcon,CalendarDaysIcon ,SettingsIcon ,LogOutIcon} from '@animateicons/react/lucide';
import {Link} from 'react-router-dom';

export default function Sidbar(){

    // sidbar item list
    const menu = [
        {title:'Dashbord',path:'/',icon:<HouseIcon size={20} className='pr-3' />},
        {title:'Expenses',path:'/expenses',icon:<DollarSignIcon size={20} className='pr-3' />},
        {title:'Members',path:'/members',icon:<UserIcon size={20} className='pr-3' />},
        {title:'Monthly Summary',path:'/summary',icon:<CalendarDaysIcon size={20} className='pr-3' />},
        {title:'Settings',path:'/settings',icon:<SettingsIcon size={20} className='pr-3' />},
    ]

    return(
        <>
        {/* sidbar */}
        <div className="min-h-160 w-65 mx-3 my-2 p-4 rounded-2xl text-[18px] bg-blue-950 text-white">
         <h1 className="text-2xl pb-5">🏠 HomeShare</h1>
         <div>
            <ul>
                {menu.map((item)=>(
                    
                    <li key={item.title} className="py-3  hover:bg-blue-600/80 hover:rounded-2xl p-3 hover:transition-all  " >
                       <Link className='flex justify-baseline items-center' to={item.path}>

                       <span>{item.icon}</span>
                       {item.title}
                       </Link>
                       
                    </li>
                ))}
                <hr className='text-white/14 my-8 mx-5' />
                <li className="mt-10 flex pr-3 justify-baseline hover:bg-blue-600/80 hover:rounded-2xl p-3 hover:transition-all"><Link className='flex justify-baseline items-center'><LogOutIcon size={20}/> LogOut</Link> </li>
            </ul>
         </div>
        </div>
        </>
    );
}