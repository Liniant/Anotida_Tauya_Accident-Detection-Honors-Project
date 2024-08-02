import React from "react";
import { HiUsers } from "react-icons/hi";
import { FaCar } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate} from "react-router-dom";

export default function Sidebar() {
    const history = useNavigate();

    return (
        <div className="flex flex-col p-4 h-full ">
            <div className="cursor-pointer text-3xl mt-5 mb-24">
                <RxHamburgerMenu />
            </div>
            <div className="flex flex-col items-center gap-5 h-full">
                <div onClick={() => history('/dashboard')}>
                    <FaCar className="text-4xl cursor-pointer" />
                </div>
                <div onClick={() => history('/messages')}>
                    <FiMessageSquare className="text-4xl cursor-pointer" />
                </div>
                <div onClick={() => history('/users')}>
                    <HiUsers className="text-4xl cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
