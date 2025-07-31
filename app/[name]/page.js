'use client'
import { useParams } from "next/navigation"
import { shoes } from "../data";
export default function Detail(){
    let parm = useParams();
    let shoe = shoes[parm.name];
    console.log("Params:", parm);
    return <div className="container item-detail">
        <img src={shoe.img}></img>
    </div>
}