import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Hero from '../Hero';
import Partner from '../Partner';
import Banner from '../Banner';
import Navbar from '../Navbar';
import ProductFeatures from '../ProductFeatures';
import FeatureSection from '../FeatureSection';
import ProducTScreen from '../ProductScreen';
import Cta from '../Cta';
import COMM from '../assets/Comm.jpg';

import COMM2 from '../assets/Comm2.jpg';
import COMM3 from '../assets/Comm3.jpg';
import COMM4 from '../assets/Comm4.jpg';
import COMM5 from '../assets/Comm5.jpg';
import COMM6 from '../assets/Comm6.jpg';
import COMM7 from '../assets/Comm7.jpg';
import COMM8 from '../assets/Comm8.jpg';

import ZEIN1 from '../assets/Zein1.jpg';
import ZEIN2 from '../assets/Zein2.jpg';
import ZEIN3 from '../assets/Zein3.jpg';

const About =  () => { 
    return (
        <><Banner /><Navbar /><div className="bg-white py-24 sm:py-32">
            
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-1">
                <div className="max-w-2xl justify-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About PTA</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Welcome to PTA, Tennis Elite Community</p>
                </div> 
                <div className="max-w-2xl justify-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vision</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Our vision is to become a leading tennis academy dedicated to nurturing and developing tennis players of all ages and skill levels. We aim to create an environment that fosters excellence, sportsmanship, and a lifelong passion for the spor</p>
                </div> 
                <div className="max-w-2xl justify-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mission</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Our mission is to provide comprehensive and elite-level tennis training programs tailored to individual needs. We strive to cultivate a culture of discipline, dedication, and continuous improvement while instilling values of integrity, teamwork, and personal growth. Through top-tier coaching, state-of-the-art facilities, and a supportive community, we aim to empower players to achieve their highest potential on and off the court</p>
                </div>
                <div className="max-w-2xl justify-center"> 
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who are we?</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Professional Tennis Academy PTA was created by Zein Radwan and officially inaugurated in 2015, right now we have +10 team members and +100 players</p>
                    </div>               
                </div>
                
                <img className=""
                    src={ZEIN1}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100" />

                <img className=""
                    src={COMM}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100" />
                
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">professional Tennis Academy PTA</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Certainly! In our PTA, we embrace the belief that tennis is for everyone, regardless of age, skill level, or financial background. Our focus is on nurturing tennis enthusiasts, aspiring to develop champions by helping individuals enhance their skills and achieve their court-related goals. We emphasize training with a strong work ethic while valuing the importance of making tennis an enjoyable experience. Our programs combine challenging drills with exciting games to ensure that players stay enthusiastic and fully engaged in their tennis journey, recognizing that having fun is essential in sparking passion among individuals</p>
                </div>
            </div>
            
            <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-4">
                <img className=""
                    src={COMM8}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100" />
                 <img className=""
                    src={COMM7}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100" />
                 <img className=""
                    src={COMM6}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100" />
                 <img className=""
                    src={COMM5}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100" />
            </div>
            </div>
        </div><Footer /></>
    )
}
export default About;