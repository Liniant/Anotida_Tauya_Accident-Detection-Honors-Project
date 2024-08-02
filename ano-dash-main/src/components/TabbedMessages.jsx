import React, {useEffect, useState} from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsArrow90DegLeft } from "react-icons/bs";
import {ImCancelCircle} from "react-icons/im";

export default function TabbedMessages() {
    return (
        <div className="p-3 bg-white w-full ">
            <div className="font-bold text-2xl mb-4">Messages</div>
            <Tabbed />
        </div>
    );
}

export function Tabbed() {

    const [newMessages, setAccidents] = useState([]);
    const [archivedMessages, setAccidents2] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/reportedAttended")
            .then((response) => response.json())
            .then((data) => setAccidents2(data))
            .catch((error) => console.error("Error fetching accidents:", error));
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/api/reportedUnAttended")
            .then((response) => response.json())
            .then((data) => setAccidents(data))
            .catch((error) => console.error("Error fetching accidents:", error));
    }, []);

   /* const newMessages = [
        { id: 1, user: "Alan Michael", message: "Check my dashboard" },
        { id: 2, user: "Jane Smith", message: "Review the report" },
        { id: 3, user: "John Doe", message: "Meeting at 3 PM" },
    ];
    */



    const deletedMessages = [
        { id: 1, user: "Dave White", message: "Old meeting notes" },
        { id: 2, user: "Eva Green", message: "Discarded draft" },
        { id: 3, user: "Frank Grey", message: "Outdated schedule" },
    ];

    const tabs = [
        {
            id: "new",
            label: "UnAttended Messages",
            content: newMessages.map((msg) => <Message key={msg.id} user={msg.name} phone={msg.phone} message={msg.message} />),
        },
       /* {
            id: "archived",
            label: "Archived Messages",
            content: archivedMessages.map((msg) => <Message key={msg.id} user={msg.user} message={msg.message} />),
        },*/
        {
            id: "archived",
            label: "Attended Messages",
            content: archivedMessages.map((msg) => <Message key={msg.id} user={msg.name} phone={msg.phone} message={msg.message} />),
        },
       /* {
            id: "deleted",
            label: "Deleted Messages",
            content: deletedMessages.map((msg) => <Message key={msg.id} user={msg.user} message={msg.message} />),
        },*/
    ];

    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Dynamic tabs" items={tabs}>
                {(item) => (
                    <Tab key={item.id} title={item.label}>
                        <Card>
                            <CardBody className="flex flex-col gap-2">
                                {item.content}
                            </CardBody>
                        </Card>
                    </Tab>
                )}
            </Tabs>
        </div>
    );
}

export function Message({ user, message,phone }) {
    return (
        <div className="flex gap-4 p-1 rounded-xl bg-purple-100 w-full justify-between items-center">
            <div className="flex flex-row gap-3">
                <div className="text-4xl font-bold text-red-600 p-3">.</div>
                <div className="flex flex-col p-1 gap-1">
                    <div className="text-lg font-semibold">User: {user}</div>
                    <div className="text-lg font-semibold">Phone: {phone}</div>
                    <div className="text-md">{message}</div>
                </div>
            </div>

            <div className="flex gap-2 p-3 ">
                <BsArrow90DegLeft className="text-xl text-blue-500 cursor-pointer"/>
                <RiDeleteBinLine className="text-xl text-red-600 cursor-pointer"/>
            </div>
        </div>
    );
}




const notificationTypes = {
    accident: 'text-red-600',
    route: 'text-blue-600',
    emergency: 'text-green-600',
};

export function Notification({ id, type, message, onClick }) {
    return (
        <div className="bg-purple-200 rounded-xl p-4 items-center flex gap-2" onClick={() => onClick(id)}>
            <ImCancelCircle className="text-xl cursor-pointer" />
            <div className={`font-bold text-lg ${notificationTypes[type]}`}>
                {message}
            </div>
        </div>
    );
}
