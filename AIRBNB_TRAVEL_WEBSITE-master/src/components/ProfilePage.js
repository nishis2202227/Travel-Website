import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
    return (
        <div className="profile-page-container">
            {/* Profile Header */}
            <section className="profile-header">
                <img 
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Profile" 
                    className="profile-image"
                />
                <h1>John Doe</h1>
                <p>Welcome back, John! Ready for your next adventure?</p>
            </section>

            {/* Booking Status */}
            <section className="booking-status">
                <h2>Booking Status</h2>
                <div className="booking-card upcoming">
                    <h3>Upcoming Trip</h3>
                    <p>Destination: Bali, Indonesia</p>
                    <p>Status: Confirmed</p>
                    <button className="view-details-button">View Details</button>
                </div>
                <div className="booking-card cancelled">
                    <h3>Cancelled Trip</h3>
                    <p>Destination: Paris, France</p>
                    <p>Status: Cancelled</p>
                    <button className="view-details-button">View Details</button>
                </div>
            </section>

            {/* Personal Information */}
            <section className="personal-info">
                <h2>Personal Information</h2>
                <div className="info-item">
                    <h3>Email</h3>
                    <p>john.doe@example.com</p>
                </div>
                <div className="info-item">
                    <h3>Phone</h3>
                    <p>+1 234 567 890</p>
                </div>
                <button className="edit-button">Edit Information</button>
            </section>

            {/* Favorites and Wishlist */}
            <section className="favorites">
                <h2>Favorites & Wishlist</h2>
                <div className="favorite-item">
                    <img src="https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Beach" />
                    <h3>Maldives</h3>
                </div>
                <div className="favorite-item">
                    <img src="https://plus.unsplash.com/premium_photo-1664298150089-c28f06834283?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mountain" />
                    <h3>Swiss Alps</h3>
                </div>
                <div className="favorite-item">
                    <img src="https://images.unsplash.com/photo-1731373887371-e5b4b00d5983?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City" />
                    <h3>New York</h3>
                </div>
            </section>

            {/* Travel History */}
            <section className="travel-history">
                <h2>Travel History</h2>
                <div className="history-item">
                    <h3>Tokyo, Japan</h3>
                    <p>Date: March 2023</p>
                    <p>Status: Completed</p>
                </div>
                <div className="history-item">
                    <h3>Sydney, Australia</h3>
                    <p>Date: December 2022</p>
                    <p>Status: Completed</p>
                </div>
            </section>
        </div>
    );
};

export default ProfilePage;