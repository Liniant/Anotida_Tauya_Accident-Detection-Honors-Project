// import MainLayout from "./components/MainLayout.jsx";
// import UsersManagement from "./components/users-table/UsersTable.jsx";
//
// export default function UserManagement(){
//     return(
//         <div className="">
//             <MainLayout>
//                 <div className="font-bold text-2xl m-2">Users</div>
//                 <UsersManagement/>
//             </MainLayout>
//
//         </div>
//     )
// }

import MainLayout from "./components/MainLayout.jsx";
import UsersManagement from "./components/users-table/UsersTable.jsx";
import UserForm from "./components/UserForm.jsx";
import {useState} from "react";

export default function UserManagement() {
    const [showForm, setShowForm] = useState(false);

    const handleFormSubmit = (formData) => {
        fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                alert('User created successfully');
                setShowForm(false);
            })
            .catch(error => {
                console.error('Error creating user:', error);
                alert('Failed to create user');
            });
    };

    return (
        <div className="">
            <MainLayout>
                <div className="font-bold text-2xl m-2">Users</div>
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-purple-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
                >
                    Add New User
                </button>
                <UsersManagement />
                {showForm && <UserForm onClose={() => setShowForm(false)} onSubmit={handleFormSubmit} />}
            </MainLayout>
        </div>
    );
}
