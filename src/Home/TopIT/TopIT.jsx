import { useEffect, useState } from "react";
import SectionTitle from "../../Share/SectionTitle/SectioTitle";
import { motion } from "framer-motion"; // Import the framer-motion library for animations

const TopIT = () => {
    const [companyData, setCompanyData] = useState([]);

    useEffect(() => {
        fetch('../../../public/ITCompany.json')
            .then(response => response.json())
            .then(data => {
                setCompanyData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const cardVariants = {
        hover: {
            translateY: -5,
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
        },
    };

    return (
        <div className='my-24'>
            <SectionTitle heading="Top IT Company" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {companyData.map((job, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-6 border border-gray-200 relative overflow-hidden"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <h3 className="text-xl font-semibold mb-2 hover:text-[#ff9900]">Company: {job.company}</h3>
                        <p>Location: {job.location}</p>
                        <img src={job.logo} alt={`${job.company} Logo`} className="mt-4 h-12" />
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-[#ff9900] transition-colors absolute right-4 bottom-4">
                            View Details
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TopIT;
