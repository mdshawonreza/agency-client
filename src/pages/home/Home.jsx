
import Banner from './Banner';
import bannerImg from '../../assets/Banner.webp'
import './banner.css'
import Breaking from './Breaking';
import AboutUS from './AboutUS';
import Project from './Project';
import FeaturedContent from './FeaturedContent';
import OurTeam from './OurTeam';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div>
           
            <div className=" bg-banner "  style={{ backgroundImage: `url(${bannerImg})`}}>
                <Banner></Banner>

            </div>
            <Breaking></Breaking>
            <AboutUS></AboutUS>
            <Project></Project>
            <OurTeam></OurTeam>
            <FeaturedContent></FeaturedContent>
            <ContactUs></ContactUs> 
        </div>
    );
};

export default Home;