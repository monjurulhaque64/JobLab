import Navbar from "../../Share/Navbar/Navbar";
import Banner from "../Banner/Banner";
import ExperiencedJobs from "../ExperiencedJobs/ExperiencedJobs";
import FresherJobs from "../FresherJobs/FresherJobs";

const Home = () => {
    return (
        <div className="container mx-auto mt-0">
            <Navbar></Navbar>
            <Banner></Banner>
            <FresherJobs></FresherJobs>
            <ExperiencedJobs></ExperiencedJobs>
        </div>
    );
};

export default Home;