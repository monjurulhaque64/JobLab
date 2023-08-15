import { useEffect, useState } from 'react';
import SectionTitle from '../../Share/SectionTitle/SectioTitle';
import ExperiencedJobsCard from './ExperiencedJobsCard';

const ExperiencedJobs = () => {
  const [experiencedJobsData, setExperiencedJobsData] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);

  useEffect(() => {
    fetch('https://joblab-server.vercel.app/experiance')
      .then(response => response.json())
      .then(data => {
        setExperiencedJobsData(data);
        setDisplayedJobs(data.slice(0, 6));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSeeMore = () => {
    setShowAllJobs(true);
    setDisplayedJobs(experiencedJobsData);
  };

  return (
    <div className='my-24'>
      <SectionTitle heading="Experienced Jobs" />
      <div className='mt-8 mb-8'>
        <ExperiencedJobsCard experiencedJobsData={displayedJobs} />

      </div>
      {!showAllJobs && (
        <button
          className="px-4 py-2 bg-blue-500 text-white mx-auto block rounded-md hover:bg-[#ff9900] transition-colors"
          onClick={handleSeeMore}
        >
          See More
        </button>
      )}
    </div>
  );
};

export default ExperiencedJobs;
