import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import { AiOutlineContacts } from "react-icons/ai";
import { MdOutlineSurfing, MdOutlineKitesurfing, MdSnowboarding } from "react-icons/md";
import { GiSurfBoard, GiSurferVan } from "react-icons/gi";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <nav className="bg-[#004C47] fixed lg:left-0 top-0 w-60 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all">
            <ul className="pl-4">
                <li>
                <NavLink>
                    <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5 mb-10 mt-10">Logo</h1>
                </NavLink>
                </li>
                <li className="bg-[#005652] p-4 rounded-tl-xl rounded-bl-xl mt-5">
                    <NavLink to="/" className="bg-[#1AD176] p-3 box-content flex items-center justify-center rounded-xl text-2xl text-white ">
                        <BiHomeSmile className="ml-2"/>Inicio</NavLink>
                </li>
                <li className="hover:bg-[#005652] p-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-5">
                    <NavLink to="/shorboards" className="group-hover:bg-[#1AD176] p-3 box-content flex items-center justify-center rounded-xl text-2xl text-[#1AD176] group-hover:text-white transition-colors">
                        <MdOutlineSurfing className="ml-2"/>Shortboards</NavLink>
                </li>
                <li className="hover:bg-[#005652] p-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-5">
                    <NavLink to="/longboards" className="group-hover:bg-[#1AD176] p-3 box-content flex items-center justify-center rounded-xl text-2xl text-[#1AD176] group-hover:text-white transition-colors">
                        <MdOutlineKitesurfing className="ml-2"/>Longboards</NavLink>
                </li>
                <li className="hover:bg-[#005652] p-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-5">
                    <NavLink to="/hybrid" className="group-hover:bg-[#1AD176] p-3 box-content flex items-center justify-center rounded-xl text-2xl text-[#1AD176] group-hover:text-white transition-colors">
                        <MdSnowboarding className="ml-2"/>Hybrid</NavLink>
                </li>
                <li className="hover:bg-[#005652] p-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-5">
                    <NavLink to="/accesorios" className="group-hover:bg-[#1AD176] p-3 box-content flex items-center justify-center rounded-xl text-2xl text-[#1AD176] group-hover:text-white transition-colors">
                        <GiSurfBoard className="ml-2"/>Accesorios</NavLink>
                </li>
                <li className="hover:bg-[#005652] p-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-5">
                    <NavLink to="/nosotros" className="group-hover:bg-[#1AD176] p-3 box-content flex items-center justify-center rounded-xl text-2xl text-[#1AD176] group-hover:text-white transition-colors">
                        <GiSurferVan className="ml-2"/>Nosotros</NavLink>
                </li>
                <li className="hover:bg-[#005652] p-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-5">
                    <NavLink to="/contacto" className="group-hover:bg-[#1AD176] p-3 box-content flex items-center justify-center rounded-xl text-2xl text-[#1AD176] group-hover:text-white transition-colors">
                        <AiOutlineContacts className="ml-2"/>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar