// Make sure Font Awesome is installed:
// npm install @fortawesome/fontawesome-free
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome for the icons
import ReviewTipsComp from '../ReviewTipsComp/ReviewTipsComp';

const reviews = [
    {
        name: "Dorian Breen",
        rating: 4,
        text: "Morbi dolor eros, malesuada nec bibendum at, tincidunt sit amet sem. Maecenas dictum pharetra tortor sit amet varius. In eu tortor diam. Vestibulum eu elit metus. Integer consectetur quam sed dolor cursus viverra molestie erat vitae, ullamcorper urna.",
        image: "https://placehold.co/50x50",
        alt: "Profile picture of Dorian Breen"
    },
    {
        name: "Gloria Trillo",
        rating: 3,
        text: "Phasellus a tempor libero. Mauris vitae aliquet ipsum, nec vulputate leo.",
        image: "https://placehold.co/50x50",
        alt: "Profile picture of Gloria Trillo"
    },
    {
        name: "Bernard Show",
        rating: 5,
        text: "In ut volutpat enim. Nam eget venenatis lorem. Nunc in varius eros, eget pretium ligula. Vestibulum vitae metus sagittis, faucibus ex ac, dictum nibh. Ut interdum dolor nec quam gravida eleifend.",
        image: "https://placehold.co/50x50",
        alt: "Profile picture of Bernard Show"
    },
    {
        name: "Antonie Bluer",
        rating: 5,
        text: "Curabitur finibus tellus arcu, non condimentum purus sodales id. Nam ornare porttitor velit, vel luctus turpis feugiat ac. In fermentum maximus varius. Fusce non pharetra magna. Etiam viverra gravida lectus.",
        image: "https://placehold.co/50x50",
        alt: "Profile picture of Antonie Bluer"
    },
    {
        name: "Kevin Igorevich",
        rating: 5,
        text: "Curabitur finibus tellus arcu, non condimentum purus sodales id. Nam ornare porttitor velit, vel luctus turpis feugiat ac. In fermentum maximus varius. Fusce non pharetra magna. Etiam viverra gravida lectus. Aliquam erat volutpat. Nam fringilla accumsan magna, nec gravida ex suscipit vitae.",
        image: "https://placehold.co/50x50",
        alt: "Profile picture of Kevin Igorevich"
    }
];

const Review = ({ name, rating, text, image, alt }) => (
    <div className="flex items-start p-4 border-b">
        <img src={image} alt={alt} className="w-12 h-12 rounded-full mr-4" />
        <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <div className="flex items-center mb-1">
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fas fa-star ${i < rating ? 'text-blue-500' : 'text-gray-300'}`}></i>
                    ))}
                </div>
            </div>
            <p className="text-gray-600">{text}</p>
        </div>
    </div>
);

const ReviewsTipsMain = () => (
    <>
  
    <ReviewTipsComp reviews ={reviews} Review ={Review}  />
    
    </>
);

export default ReviewsTipsMain;
