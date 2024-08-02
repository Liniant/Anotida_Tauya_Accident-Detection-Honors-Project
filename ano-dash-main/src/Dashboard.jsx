
import Sidebar from "./components/Sidebar.jsx";
import UsersManagement from "./components/users-table/UsersTable.jsx";
import MainLayout from "./components/MainLayout.jsx";
import CalenderSect from "./components/Calender.jsx";
import AccidentsTable from "./components/table/Table.jsx";


export default function Dashboard() {
    return (
        <MainLayout>
            <div className=" flex flex-row h-[100vh]  p-3 gap-2">
                <div className="flex flex-col mx-3 bg-white flex-1 p-3">
                    <div className="font-bold p-3"> List Of Accidents</div>
                    <AccidentsTable/>
                </div>

                <div className="bg-purple-300 p-3 ">
                    <div className="font-bold text-center m-2">Accidents by Date</div>
                    <CalenderSect/>
                </div>


            </div>


        </MainLayout>
    )
}
