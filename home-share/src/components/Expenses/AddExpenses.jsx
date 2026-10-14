import { useState } from "react";

export default function AddExpenses({onClose,onSave}){

    //form states
    const[date,setDate]=useState('');
    const[description,setDescription]=useState('');
    const[amount,setAmount]=useState('');
    const[paidBy,setPaidBy]=useState('');

    //save button
    function handleSubmit(e){
        e.preventDefault();
        onSave({
            id:Date.now(),
            description:description,
            date:date,
            amount:amount,
            paidBy:paidBy,
            action:'🗑️'
            
        })
        onClose(false);
    }




    return(
        <>
        <div className="fixed inset-0 z-50  flex items-center justify-center bg-blue-950/80">
            <h1 className="font-bold text-red-500 text-center">Add New Expenses</h1>

            <form onSubmit={handleSubmit} className=" border rounded-2xl p-6 bg-blue-900 w-full max-w-lg backdrop-blur-lg ">
                    <div className="grid grid-cols-2 justify-baseline ">
                        <label htmlFor="">Description :</label>
                        <input value={description} onChange={(e)=>setDescription(e.target.value)} className="inputStyle justify-baseline" type="text" placeholder="e.g Electricity" />

                        <label htmlFor="">Date :</label>
                        <input value={date} onChange={(e)=>setDate(e.target.value)} className="inputStyle " type="date" placeholder="2026-10-13"/>
                    </div>

                    <div className="grid grid-cols-2">
                        <label htmlFor="">Amount :</label>
                        <input value={amount} onChange={(e)=>setAmount(e.target.value)} className="inputStyle " type="text"  placeholder="e.g 60$"/>

                        <label htmlFor="">Paid By :</label>
                        <select value={paidBy} onChange={(e)=>setPaidBy(e.target.value)} className="inputStyle bg-blue-900/20" name="" id="">
                            <option value="">Select Member</option>
                            <option value="Somaya jan">Soamya jan</option>
                            <option value="Hasib jan">Hasib jan</option>
                            <option value="Neda jan">Neda jan</option>
                        </select>
                    </div>
                    <div className=""> 
                        <button className="px-5 py-2 mr-5 border rounded-2xl border-white bg-blue-700 hover:bg-white hover:text-blue-900 hover:border-blue-900" type="submit" >Add</button>
                        <button className="border rounded-2xl px-5 py-2 hover:bg-blue-900 "type="button" onClick={()=>onClose(false)}>Cancel</button>
                    </div>
            </form>
        </div>
        
        
        
        </>
    );
}