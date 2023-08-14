import Navbar from "../../Share/Navbar/Navbar";
import Banner from "../Banner/Banner";
import FresherJobs from "../FresherJobs/FresherJobs";

const Home = () => {
    return (
        <div className="container mx-auto mt-0">
            <Navbar></Navbar>
            <Banner></Banner>
            <FresherJobs></FresherJobs>
        </div>
    );
};

export default Home;