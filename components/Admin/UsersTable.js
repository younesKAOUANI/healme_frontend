"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { API_BASE_URL, API_ENDPOINTS } from "@/utils/api";
import DeletePopup from "./DeletePopup";
import ModifyPopup from "./ModifyPopup";
import { Table, Input } from "antd";

const UsersTable = () => {
    const [records, setRecords] = useState([]);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [isModifyPopupOpen, setIsModifyPopupOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await axios.get(
                `${API_BASE_URL}${API_ENDPOINTS.USERS}`
            );
            setRecords(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = (user) => {
        setSelectedUser(user);
        setIsDeletePopupOpen(true);
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setIsModifyPopupOpen(true);
    };

    const handleDeleteUser = (userId) => {
        setRecords(records.filter((record) => record.id !== userId));
    };

    const handleFilter = (event) => {
        const newData = records.filter((row) =>
            row.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setRecords(newData);
    };

    const handleUpdateUser = () => {
        fetchUsers(); // Refresh user data after update
    };

    const toggleDeletePopup = () => {
        setIsDeletePopupOpen(!isDeletePopupOpen);
    };

    const toggleModifyPopup = () => {
        setIsModifyPopupOpen(!isModifyPopupOpen);
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        { title: "Gender", dataIndex: "gender", key: "gender" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Phone", dataIndex: "number", key: "number" },
        { title: "Country", dataIndex: "country", key: "country" },
        { title: "Date of Birth", dataIndex: "birthDate", key: "birthDate" },
        {
            title: "Actions",
            key: "actions",
            render: (text, record) => (
                <div className="w-auto -ml-4 my-2">
                    <button
                        className="bg-blue-400  px-3 py-2 mx-2 my-1 rounded-lg hover:bg-blue-600 hover:scale-95"
                        onClick={() => handleEdit(record)}
                    >
                        Edit
                    </button>
                    <button
                        className="bg-red-400 px-3  py-2 mx-2 my-1 rounded-lg hover:bg-red-600 hover:scale-95"
                        onClick={() => handleDelete(record)}
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];
    const filteredData = records.filter((item) => {
        return Object.keys(item).some(
            (key) =>
                item[key] !== null &&
                item[key]
                    .toString()
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
        );
    });
    return (
        <div>
            <div>
                <Input
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{ marginBottom: 16 }}
                />
                <Table
                    columns={columns}
                    dataSource={filteredData}
                    rowKey="id"
                />
            </div>
            {isDeletePopupOpen && (
                <DeletePopup
                    isOpen={isDeletePopupOpen}
                    togglePopup={toggleDeletePopup}
                    user={selectedUser}
                    onDelete={handleDeleteUser}
                />
            )}
            {isModifyPopupOpen && (
                <ModifyPopup
                    isOpen={isModifyPopupOpen}
                    togglePopup={toggleModifyPopup}
                    user={selectedUser}
                    onUpdate={handleUpdateUser}
                />
            )}
        </div>
    );
};

export default UsersTable;
