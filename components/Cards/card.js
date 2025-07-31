'use client'

import Link from "next/link";

export default function Card({ shoe, grip }) {
    function handleClick() {
        console.log("Card clicked", grip);
    }
    return <Link href={`/${grip}`} className="text-decoration-none text-dark">
        <div className="card" style={{ height: "100%" }} title={shoe.name} onClick={handleClick}>
            <img src={shoe.img} className="card-img-top" alt="..." />
            <div className="card-body">
            </div>
        </div>
    </Link>
}