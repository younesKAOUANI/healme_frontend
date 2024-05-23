import { logOut } from '@/utils/logOut';
import { useState } from 'react';
import { jwtDecode } from '@/utils/jwtDecode';
import DeletePopup from '../Admin/DeletePopup';
import ModifyPopup from '../Admin/ModifyPopup';
export default function UserData({ signOut, user }) {

    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [isModifyPopupOpen, setIsModifyPopupOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No token found');
    }
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.sub;
    
    const handleDelete = (user) => {
        setSelectedUser(user);
        setIsDeletePopupOpen(true);
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setIsModifyPopupOpen(true);
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
    return (
        
        <section className="w-100% py-24 pt-52 overflow-hidden dark:bg-gray-900 bg-primary">
            {isDeletePopupOpen && (
                <DeletePopup
                    isOpen={isDeletePopupOpen}
                    togglePopup={toggleDeletePopup}
                    user={user}
                />
            )}
            {isModifyPopupOpen && (
                <ModifyPopup
                    isOpen={isModifyPopupOpen}
                    togglePopup={toggleModifyPopup}
                    user={user}
                    onUpdate={handleUpdateUser}
                />
            )}
            <div className="flex flex-col">
                {/* <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
                        <img src={user.img} alt="User Profile" className=" lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2  outline-secondaryLight rounded-full relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]" />
                        <h2
                            className="w-full text-left  sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                            {user.name}</h2>
                    </div> */}
                <div
                    className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
                    <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                        <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                            <div className="w-full">
                                <dl className="grid gap-4 lg:grid-cols-2 text-gray-900 divide-y divide-secondaryLight dark:text-white dark:divide-gray-700">
                                    <div className="flex flex-col pb-3 ">
                                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Name</dt>
                                        <dd className="text-lg font-semibold">{user.name}</dd>
                                    </div>
                                    <div className="flex flex-col py-3">
                                        <dt className="mb-1 text-gray-500 md:text-lg  dark:text-gray-400">Phone Number</dt>
                                        <dd className="text-lg font-semibold">{user.number}</dd>
                                    </div>
                                    <div className="flex flex-col py-3">
                                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                                        <dd className="text-lg font-semibold">{user.email}</dd>
                                    </div>
                                    <div className="flex flex-col py-3">
                                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Address</dt>
                                        <dd className="text-lg font-semibold">{user.address}</dd>
                                    </div>
                                    <div className="flex flex-col py-3">
                                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Country</dt>
                                        <dd className="text-lg font-semibold">{user.country}</dd>
                                    </div>
                                    <div className="flex flex-col py-3">
                                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Gender</dt>
                                        <dd className="text-lg font-semibold">{user.gender}</dd>
                                    </div>
                                    <div className="flex flex-col py-3">
                                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Birth Date</dt>
                                        <dd className="text-lg font-semibold">{user.birthDate}</dd>
                                    </div>
                                    <div className="flex flex-col py-3">
                                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Time Joined</dt>
                                        <dd className="text-lg font-semibold">{user.timeJoined}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                {signOut && (
                    <>
                        <div className='w-auto mx-auto my-8'>
                            <button className='bg-blue-400 h-12 p-3 mx-2 my-1 rounded-lg hover:bg-blue-600 hover:scale-95' onClick={() => handleEdit(userId)}>Edit Account</button>
                            <button className='bg-red-400 h-12 p-2 mx-2 my-1 rounded-lg hover:bg-red-600 hover:scale-95' onClick={() => handleDelete(userId)}>Delete Account</button>
                        </div>
                        <button
                            className="w-[200px] mx-auto text-white bg-red-400 hover:bg-red-600 hover:scale-95 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center"
                            onClick={logOut}
                        >
                            Sign out
                        </button>
                    </>
                )}
            </div>
        </section>
    );
}
