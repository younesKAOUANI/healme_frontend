import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "@/utils/api";
import Loader from "../Loader/Loader";
import { jwtDecode } from "@/utils/jwtDecode";
import { Button } from "flowbite-react";
import UserData from "../Profile/UserData";
import UsersTable from "./UsersTable";

const Layout = () => {
    const [selectedComponent, setSelectedComponent] = useState("dashboard");
    const [userArray, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    return <h1>no token</h1>;
                }
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.sub;

                const response = await axios.get(
                    `${API_BASE_URL}${API_ENDPOINTS.USERS}/${userId}`
                );
                if (response.status === 200) {
                    setUser(response.data);
                } else {
                    throw new Error("Failed to fetch user data");
                }
            } catch (error) {
                console.error(error);
                setError(
                    error.message ||
                        "An error occurred while fetching user data."
                );
            } finally {
                setIsLoading(false);
            }
        };
    

        fetchUserData();
    }, []);

    if (isLoading) {
        <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    const renderComponent = () => {
        switch (selectedComponent) {
          case 'dashboard':
            return <Button>Dashboard</Button>;
          case 'users':
            return <UsersTable />;
          case 'profile':
            return <UserData signOut={false} user={userArray}/>;
          default:
            return <Button>Dashboard</Button>;
    
        }
      };
    return (
        <div className="flex">
            <Sidebar onMenuItemClick={setSelectedComponent} />
            <main className="flex-1  z-10 pl-[250px] ">
                <renderComponent/>
            </main>
        </div>
    );
};

export default Layout;
