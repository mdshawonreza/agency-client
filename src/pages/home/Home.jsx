
import Banner from './Banner';
import bannerImg from '../../assets/BG Hero.webp'
import './banner.css'
import Breaking from './Breaking';
import AboutUS from './AboutUS';
import Project from './Project';
import FeaturedContent from './FeaturedContent';
import OurTeam from './OurTeam';
import ContactUs from './ContactUs';
import AppointmentForm from './AppointmentForm';

const Home = () => {
    return (
        <div>
           
            <div className=" bg-banner "  style={{ backgroundImage: `url(${bannerImg})`}}>
                <Banner></Banner>

            </div>
            <div>
                <Breaking></Breaking>
            <AboutUS></AboutUS>
            <AppointmentForm></AppointmentForm>
            <Project></Project>
            <OurTeam></OurTeam>
            <FeaturedContent></FeaturedContent>
            <ContactUs></ContactUs>  
            </div>
        </div>
    );
};

export default Home;