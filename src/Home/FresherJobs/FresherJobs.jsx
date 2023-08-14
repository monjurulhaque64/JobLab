import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Share/SectionTitle/SectioTitle';
import FresherJobCard from './FresherJobCard';

const FresherJobs = () => {
  const [freaserJobsData, setFreaserJobsData] = useState([]);

  useEffect(() => {
    fetch('../../../public/Freaseer.json') 
      .then(response => response.json())
      .then(data => {
        setFreaserJobsData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <SectionTitle heading="Fresher Jobs"/>
      <div className='mt-10 mb-10'>
        <FresherJobCard key={freaserJobsData.ID} freaserJobsData={freaserJobsData}></FresherJobCard>
      </div>
    </div>
  );
};

export default FresherJobs;
