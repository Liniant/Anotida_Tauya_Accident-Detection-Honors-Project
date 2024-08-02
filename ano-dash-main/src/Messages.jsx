import React, { useEffect, useState } from 'react';

import Sidebar from './components/Sidebar';
import TabbedMessages, {Notification} from './components/TabbedMessages';



export default function Messages() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetchNotifications('sent');
    }, []);

    const fetchNotifications = (status) => {
        fetch(`http://localhost:5000/api/wnotifications/status/${status}`)
            .then((response) => response.json())
            .then((data) => setNotifications(data))
            .catch((error) => console.error('Error fetching notifications:', error));
    };

    const handleNotificationClick = (id) => {
        fetch(`http://localhost:5000/api/nwotifications/${id}`, {
            method: 'PUT',
        })
            .then((response) => response.json())
            .then(() => {
                setNotifications(notifications.filter((notification) => notification.id !== id));
                alert('Notification marked as read');
            })
            .catch((error) => {
                console.error('Error updating notification status:', error);
                alert('Failed to update notification status');
            });
    };

    return (
        <div className="flex flex-col w-full gap-2 bg-purple-300 h-[100vh]">
            <div className="">
                <div className="text-xl font-bold text-purple-700 p-4">Mhanya</div>
            </div>
            <div className="flex gap-2 h-full ml-2">
                <Sidebar />
                <TabbedMessages className="w-2/4" />
                <div className="bg-white w-2/4 p-3">
                    <div className="font-bold text-2xl">Notifications</div>
                    <div className="flex flex-col gap-2">
                        {notifications.map((notification) => (
                            <Notification
                                key={notification.id}
                                id={notification.id}
                                type={notification.type}
                                message={notification.message}
                                onClick={handleNotificationClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
