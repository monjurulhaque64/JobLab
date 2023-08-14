import SectionTitle from "../../Share/SectionTitle/SectioTitle";
import project1Image from '../../assets/images/project1.png';
import project2Image from '../../assets/images/project2.png';
import project3Image from '../../assets/images/project3.png';
import project4Image from '../../assets/images/project4.png';
import project5Image from '../../assets/images/project5.png';
import project6Image from '../../assets/images/project6.png';
import './MyProfile.css'


const MyProfile = () => {
  const projects = [
    {
        img: project1Image,
        title: "MindScope",
        description: "ReactJs, React Router, JavaScript, Tailwind CSS, Node.js, ExpressJs, MongoDB, Firebase, Stripe.js.",
        DemoLink: "https://mindscape-b155f.web.app/",
        githubLink: "https://github.com/monjurulhaque64/MindScape",
    },
    {
        img: project2Image,
        title: "Toy House",
        description: "ReactJs, React Router, JavaScript, Tailwind CSS, Node.js, ExpressJs, MongoDB, Firebase.",
        DemoLink: "https://toy-house-756b7.web.app/",
        githubLink: "https://github.com/monjurulhaque64/Toy-Market",
    },
    {
        img: project3Image,
        title: "SideChef",
        description: "ReactJs, React Router, JavaScript, Tailwind CSS, Firebase, SwiperJS.",
        DemoLink: "https://sidechef-f47ef.web.app/",
        githubLink: "https://github.com/monjurulhaque64/Chef-Market",
    },
    {
        img: project4Image,
        title: "Job Link",
        description: "ReactJs, React Router, JavaScript, Tailwind CSS, React-toastify, Recharts",
        DemoLink: "https://lucent-snickerdoodle-83b6ad.netlify.app/",
        githubLink: "https://github.com/monjurulhaque64/job-link",
    },
    
    {
        img: project5Image,
        title: "Knowledge Cafe",
        description: " ReactJs, JavaScript, Tailwind CSS.",
        DemoLink: "https://stellular-gecko-33023d.netlify.app/",
        githubLink: "https://github.com/monjurulhaque64/knowlage-cafe",
    },
    {
        img: project6Image,
        title: "AI Universe Hub ",
        description: "HTML, CSS, JavaScript, Tailwind CSS",
        DemoLink: "https://tangerine-panda-1ee862.netlify.app/",
        githubLink: "#",
    }
  ];

  return (
    <div className="my-24">
      <SectionTitle heading="My Resume" />

      {/* Video Resume */}
      <div className="mb-8">
        <iframe
          src="https://drive.google.com/file/d/1er3Md8dcu3SMt0EZRnfyMkJdjErk6rZr/preview"
          width="100%"
          height="400" 
          title="Video Resume"
        ></iframe>
      </div>

      {/* Projects */}
      <SectionTitle heading="My Projects" />
      <div>
        <div className="">
        <div className="mb-5 po_items_ho grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((data, i) => {
            return (
              <div key={i} className="po_item bg-white rounded-lg shadow-md p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg hover:border-[#ff9900] border border-gray-200">
                <div className="image-wrap">
                  
                    <img src={data.img} alt="" />
                 
                </div>

                <div className="content">
                  <h1 className="text-muted font-bold text-3xl">{data.title}</h1>
                  <p className="text-muted"> <span className="projectTitle">Tecnology: </span> {data.description}</p>
                  <div className="gap-2">
                    <a className="p-2 m-2 btn btn-info" href={data.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a className="p-2 m-2 btn btn-success" href={data.DemoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
