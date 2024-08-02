


import React, { useState } from "react";

export default function UserForm({ onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        surname: "",
        role: "",
        allergies: "",
        medical_insurance: "",
        emergency_contact: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl">
                <h2 className="text-xl font-bold mb-4">Add Emergency Response Team Member</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-bold mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-bold mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-1">Surname</label>
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-bold mb-1">Team Type</label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            >
                                <option value="">Select Role</option>
                                <option value="driver">Driver</option>
                                <option value="police">Police</option>
                                <option value="ambulance">Ambulance</option>
                                <option value="firefighter">Firefighter</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-1">Allergies</label>
                            <input
                                type="text"
                                name="allergies"
                                value={formData.allergies}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-1">Medical Insurance</label>
                            <input
                                type="text"
                                name="medical_insurance"
                                value={formData.medical_insurance}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-bold mb-1">Emergency Contact</label>
                            <input
                                type="text"
                                name="emergency_contact"
                                value={formData.emergency_contact}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button
                            type="button"
                            className="bg-gray-500 text-white font-bold py-1 px-3 rounded mr-2"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
