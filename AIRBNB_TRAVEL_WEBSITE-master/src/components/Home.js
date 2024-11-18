import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Discover Your Next Adventure</h1>
                    <p>Explore the world’s most beautiful destinations with us.</p>
                    <Link to="/search">
                        <button className="cta-button">Start Your Journey</button>
                    </Link>
                </div>
            </section>

            {/* Popular Destinations */}
            <section className="popular-destinations">
                <h2>Popular Destinations</h2>
                <div className="destinations-grid">
                    <div className="destination-card">
                        <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="Paris" />
                        <h3>Paris</h3>
                        <p>The city of lights and love.</p>
                    </div>
                    <div className="destination-card">
                        <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" alt="Bali" />
                        <h3>Bali</h3>
                        <p>A tropical paradise like no other.</p>
                    </div>
                    <div className="destination-card">
                        <img src="https://images.unsplash.com/photo-1731373887371-e5b4b00d5983?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="New York" />
                        <h3>New York</h3>
                        <p>The city that never sleeps.</p>
                    </div>
                    <div className="destination-card">
                        <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tokyo" />
                        <h3>Tokyo</h3>
                        <p>Where tradition meets the future.</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose-us">
                <h2>Why Choose Us</h2>
                <div className="benefits-grid">
                    <div className="benefit-card">
                        <h3>24/7 Support</h3>
                        <p>We’re here to help anytime, anywhere.</p>
                    </div>
                    <div className="benefit-card">
                        <h3>Best Deals</h3>
                        <p>Affordable packages for your perfect vacation.</p>
                    </div>
                    <div className="benefit-card">
                        <h3>Personalized Experiences</h3>
                        <p>Tailored packages to suit your needs.</p>
                    </div>
                </div>
            </section>

            {/* Featured Packages */}
            <section className="featured-packages">
                <h2>Featured Travel Packages</h2>
                <div className="packages-grid">
                    <div className="package-card">
                        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Beach" />
                        <h3>Beach Escape</h3>
                        <p>5 days in paradise.</p>
                        <button className="package-button">View Details</button>
                    </div>
                    <div className="package-card">
                        <img src="https://images.unsplash.com/photo-1627379770428-c477c1e7d747?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mountain" />
                        <h3>Mountain Adventure</h3>
                        <p>Explore the wilderness.</p>
                        <button className="package-button">View Details</button>
                    </div>
                    <div className="package-card">
                        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" alt="City" />
                        <h3>City Lights</h3>
                        <p>Experience urban wonders.</p>
                        <button className="package-button">View Details</button>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p>"An unforgettable experience! Highly recommended."</p>
                        <h4>- Jane Doe</h4>
                    </div>
                    <div className="testimonial-card">
                        <p>"The best travel agency I’ve ever used. Great service!"</p>
                        <h4>- John Smith</h4>
                    </div>
                    <div className="testimonial-card">
                        <p>"From start to finish, everything was perfect!"</p>
                        <h4>- Emily Johnson</h4>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;