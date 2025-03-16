import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const ProfilePage = () => {
    const [userInfo, setUserInfo] = React.useState({
        name: '',
        email: '',
        bio: '',
    });

    React.useEffect(() => {
        fetch('/api/user-info')
            .then(response => response.json())
            .then(data => {
                setUserInfo({
                    name: data.name,
                    email: data.email,
                    bio: data.bio,
                });
            })
            .catch(error => {
                console.error('Error fetching user info:', error);
            });
    }, []);

    return (
        <>
            {/*Navbar */}
            <Navbar />
            {/*Navbar */}
            <div>
                {/* <Dashboard /> */}
            </div>
            {/* <div>
                <h1>Profile Page</h1>
                <div>
                    <h2>User Info</h2>
                    <p><strong>Name:</strong> {userInfo.name}</p>
                    <p><strong>Email:</strong> {userInfo.email}</p>
                    <p><strong>Bio:</strong> {userInfo.bio}</p>
                </div>

            </div> */}
            {/*Footer */}
            <Footer />
            {/*Footer */}
        </>
    );
};

export default ProfilePage;