import { Link } from "react-router-dom";

const ExperiencedJobsCard = ({ experiencedJobsData }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {experiencedJobsData.map((job, index) => (

                <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg hover:border-[#ff9900] border border-gray-200 " key={index}>
                    <h3 className="text-xl font-semibold mb-2 hover:text-[#ff9900]">{job.position}</h3>
                    <p>Location: {job.location}</p>
                    <p>Company: {job.company}</p>
                    <img src={job.logo} alt={`${job.company} Logo`} className="mt-4 h-12" />
                    <Link to={'/singin'}><button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-[#ff9900] transition-colors absolute right-4 bottom-4">
                        Apply
                    </button></Link>
                </div>

            ))}

        </div>
    );
};

export default ExperiencedJobsCard;