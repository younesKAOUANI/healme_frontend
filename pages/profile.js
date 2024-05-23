import axios from 'axios';
import { useEffect, useState } from 'react';
import { jwtDecode } from '@/utils/jwtDecode';
import { API_BASE_URL, API_ENDPOINTS } from '@/utils/api';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import UserData from '@/components/Profile/UserData';
import Loader from '@/components/Loader/Loader';

export default function ProfilePage() {
    const [userArray, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.sub;

                const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.USERS}/${userId}`);
                if (response.status === 200) {
                    setUser(response.data);
                } else {
                    throw new Error('Failed to fetch user data');
                }
            } catch (error) {
                console.error(error);
                setError(error.message || 'An error occurred while fetching user data.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (isLoading) {
      return <Loader/>
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Header />
            <UserData signOut={true} user={userArray} />
            <Footer />
        </div>
    );
}