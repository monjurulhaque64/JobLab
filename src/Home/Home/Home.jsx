import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import ExperiencedJobs from "../ExperiencedJobs/ExperiencedJobs";
import FresherJobs from "../FresherJobs/FresherJobs";
import MyProfile from "../MyProfile/MyProfile";
import TopIT from "../TopIT/TopIT";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <FresherJobs></FresherJobs>
            <ExperiencedJobs></ExperiencedJobs>
            <TopIT></TopIT>
            <MyProfile></MyProfile>
            <Blog></Blog>
        </div>
    );
};

export default Home;