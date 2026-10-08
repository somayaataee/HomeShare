import Sidbar from "../components/Sidbar";
import ProfileImage from '../assets/images/content-girl.png'
export default function Dashbord(){
    return(
        <>
         <div className="flex">
            <div>
            <Sidbar/>
         </div>
         {/* main content */}
         <div>
            <div>
                <h1>Hello!</h1>
                <p>Here's what's happening eith your home Expenses.</p>
            </div>
            <div>
                <img className="h-20 w-25" src={ProfileImage} alt="" />
            </div>
         </div>
         </div>
        
        </>
    );
}