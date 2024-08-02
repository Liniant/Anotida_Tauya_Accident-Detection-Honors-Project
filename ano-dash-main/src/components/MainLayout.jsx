import Sidebar from "./Sidebar.jsx";
import UsersTable from "./table/Table.jsx";
import UsersManagement from "./users-table/UsersTable.jsx";

export default function MainLayout({children}){
    return(
        <div className="flex bg-purple-200 h-full">
            <div className="flex-2 bg-purple-400">
                <Sidebar/>
            </div>
            <div className="flex-1 ">
                <div className="flex flex-col gap-1 p-2 mx-4">
                    <div className="font-bold text-2xl text-purple-700 p-4">Mhanya</div>
                    <div className=" font-bold ">Accident Detection And Emergency Response System</div>
                </div>

                <div className=" mx-3">
                    {children}
                </div>


            </div>

        </div>
    )
}