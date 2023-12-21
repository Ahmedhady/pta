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


const Home =  () => { 
    return (
        <><Banner /><Navbar /><Cta /><ProductFeatures /><ProducTScreen /><FeatureSection /><Partner /><Footer /></>
    )
}
export default Home;