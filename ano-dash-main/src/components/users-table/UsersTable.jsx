// import React, { useState, useEffect } from "react";
// import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip } from "@nextui-org/react";
// import { EditIcon } from "./EditIcon";
// import { DeleteIcon } from "./DeleteIcon";
// import { EyeIcon } from "./EyeIcon";
//
// const columns = [
//     { name: "Email", uid: "email" },
//     { name: "Role", uid: "role" },
//     { name: "Actions", uid: "actions" },
// ];
//
// export default function UsersManagement() {
//     const [users, setUsers] = useState([]);
//
//     useEffect(() => {
//         fetch("http://localhost:5000/api/users")
//             .then((response) => response.json())
//             .then((data) => setUsers(data))
//             .catch((error) => console.error("Error fetching users:", error));
//     }, []);
//
//     const renderCell = (user, columnKey) => {
//         const cellValue = user[columnKey];
//
//         switch (columnKey) {
//             case "email":
//                 return <span>{cellValue}</span>;
//             case "role":
//                 return (
//                     <div className="flex flex-col">
//                         <p className="text-bold text-sm capitalize">{cellValue}</p>
//                     </div>
//                 );
//             case "actions":
//                 return (
//                     <div className="relative flex items-center gap-2">
//                         <Tooltip content="Details">
//                             <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
//                                 <EyeIcon />
//                             </span>
//                         </Tooltip>
//                         <Tooltip content="Edit user">
//                             <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
//                                 <EditIcon />
//                             </span>
//                         </Tooltip>
//                         <Tooltip color="danger" content="Delete user">
//                             <span className="text-lg text-danger cursor-pointer active:opacity-50">
//                                 <DeleteIcon />
//                             </span>
//                         </Tooltip>
//                     </div>
//                 );
//             default:
//                 return cellValue;
//         }
//     };
//
//     return (
//         <Table aria-label="Example table with custom cells">
//             <TableHeader columns={columns}>
//                 {(column) => (
//                     <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
//                         {column.name}
//                     </TableColumn>
//                 )}
//             </TableHeader>
//             <TableBody items={users}>
//                 {(item) => (
//                     <TableRow key={item.id}>
//                         {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
//                     </TableRow>
//                 )}
//             </TableBody>
//         </Table>
//     );
// }
//


import React, { useState, useEffect } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Tooltip,
    Button,
    Input,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";

const columns = [
    { name: "Email", uid: "email" },
    { name: "Role", uid: "role" },
    { name: "Actions", uid: "actions" },
];

const roles = ["driver", "police", "ambulance", "firefighter", "user"];

export default function UsersManagement() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [formData, setFormData] = useState({
        allergies: '',
        medical_insurance: '',
        emergency_contact: '',
        role: '',
        id:0
    });

    useEffect(() => {
        fetch("http://localhost:5000/api/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    const handleDelete = (user) => {
        setSelectedUser(user);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        fetch(`http://localhost:5000/api/users/${selectedUser.id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then(() => {
                setUsers(users.filter(user => user.id !== selectedUser.id));
                setShowDeleteModal(false);
                setSelectedUser(null);
                alert("User deleted successfully");
            })
            .catch((error) => {
                console.error("Error deleting user:", error);
                alert("Failed to delete user");
            });
    };


    /*const confirmDelete = () => {
        fetch(`http://localhost:5000/api/user_delete`, {
            method: 'POST',
        })
            .then((response) => response.json())
            .then(() => {
                setUsers(users.filter(user => user.id !== selectedUser.id));
                setShowDeleteModal(false);
                setSelectedUser(null);
                alert("User deleted successfully");
            })
            .catch((error) => {
                console.error("Error deleting user:", error);
                alert("Failed to delete user");
            });
    };*/
    const handleEdit = (user) => {
        console.log("this is the handleEdit function", user.id);
        setSelectedUser(user);
        setFormData({
            allergies: user.allergies || '',
            medical_insurance: user.medical_insurance || '',
            emergency_contact: user.emergency_contact || '',
            role: user.role || '',
            id: user.id,
        });
        setShowEditModal(true);
    };

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRoleChange = (role) => {
        setFormData({ ...formData, role });
    };

     /*const confirmEdit = () => {
        fetch(`http://localhost:5000/api/users/${selectedUser.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then(() => {
                setUsers(users.map(user => user.id === selectedUser.id ? { ...user, ...formData } : user));
                setShowEditModal(false);
                setSelectedUser(null);
                //Debugger Here
                alert("Profile updated successfully");
            })
            .catch((error) => {
                console.error("Error updating user profile:", error);
                alert("Failed to update profile");
            });
    };*/
    const confirmEdit = () => {
        console.log('Selected user:', selectedUser.id); // Add this line
        fetch(`http://localhost:5000/api/users/${selectedUser.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then(() => {
                setUsers(users.map(user => user.id === selectedUser.id ? { ...user, ...formData } : user));
                setShowEditModal(false);
                setSelectedUser(null);
                console.log('Edited user:', formData); // Add this line
                alert("Profile updated successfully");
            })
            .catch((error) => {
                console.error("Error updating user profile:", error);
                alert("Failed to update profile");
            });
    };

    const renderCell = (user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "email":
                return <span>{cellValue}</span>;
            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                    </div>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <Tooltip content="Edit user">
                            <span
                                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                                onClick={() => handleEdit(user)}
                            >
                                <EditIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete user">
                            <span
                                className="text-lg text-danger cursor-pointer active:opacity-50"
                                onClick={() => handleDelete(user)}
                            >
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    };

    return (
        <>
            <Table aria-label="Example table with custom cells">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={users}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {showDeleteModal && (
                <CustomModal
                    title="Confirm Delete"
                    onClose={() => setShowDeleteModal(false)}
                    onConfirm={confirmDelete}
                >
                    <p>Are you sure you want to delete this user?</p>
                </CustomModal>
            )}

            {showEditModal && (
                <CustomModal
                    title="Edit User Profile"
                    onClose={() => setShowEditModal(false)}
                    onConfirm={confirmEdit}
                >
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Allergies"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleFormChange}
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Medical Insurance"
                        name="medical_insurance"
                        value={formData.medical_insurance}
                        onChange={handleFormChange}
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Emergency Contact"
                        name="emergency_contact"
                        value={formData.emergency_contact}
                        onChange={handleFormChange}
                    />


                    <Dropdown>
                        <DropdownTrigger>
                            <Button flat color="primary" css={{ tt: "capitalize" }}>
                                {formData.role || "Select Role"}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            disallowEmptySelection
                            aria-label="Single selection actions"
                            selectedKeys={new Set([formData.role])}
                            selectionMode="single"
                            onSelectionChange={(keys) => handleRoleChange([...keys][0])}
                        >
                            {roles.map((role) => (
                                <DropdownItem key={role}>{role}</DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </CustomModal>
            )}
        </>
    );
}

function CustomModal({ title, onClose, onConfirm, children }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3">
                <div className="border-b px-4 py-2 flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <button className="text-black close-modal" onClick={onClose}>×</button>
                </div>
                <div className="p-4">
                    {children}
                </div>
                <div className="flex justify-end p-2 border-t">
                    <Button auto flat onClick={onClose}>
                        Cancel
                    </Button>
                    <Button auto onClick={onConfirm}>
                        Confirm
                    </Button>
                </div>
            </div>
        </div>
    );
}
