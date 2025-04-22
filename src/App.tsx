import "./App.css";
import "./index.css";
import Header from "./components/header";
import Headshot from "./components/headshot";
import Socials from "./components/socials";
import ExperienceCard from "./components/experience";
import Education from "./components/education";

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">

        {/* Left Div */}
        <div className="fixed lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <Headshot src="src/assets/headshot.jpg"/>
            <Header />
            <Socials />
          </div>
        </div>

        {/* Right Div */}
        <div className="pt-24 lg:w-[52%] lg:py-24">
          <div className="text-left max-w-3xl">
            <div className="text-gray-300 mb-4 space-y-6">
              <h2 className="text-3xl font-bold text-white">About</h2>
              <p>
                I'm a Software Engineer at the University of Texas in Austin passionate about building software that blends engineering with real-world impact. My philosophy in creating and design is to build in order to learn and make the peoples lives around me easier and more fun.
              </p>

              <p>
                I've previously worked at Tiktok, scaling ad infrastructure, Cisco Duo Security, building secure backend testing tools, and Uber, analyzing revenue.
              </p>
            </div>
            
            {/* Experience section */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Experience</h2>
            <ExperienceCard
              logoSrc="https://cdn.brandfetch.io/idPDsaQdEh/w/201/h/98/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
              jobTitle="Software Engineer Intern"
              company="Cisco Systems: Duo Security"
              location="Remote"
              dateRange="May 2024 – August 2024"
              bullets={[
                "Improved an internal performance testing tool by adding a feature using Python, AWS, and MySQL to dynamically create simulated customers and generate realistic HTTP requests",
                "Executed load testing suites on a simulated production environment to validate software release performance metrics using Argo Workflows, Datadog, Grafana, and Kibana dashboards.",
                "Identified and resolved several bugs in Kubernetes deployments, Docker containers, and documentation."
              ]}
            />

            <ExperienceCard
              logoSrc="https://cdn.brandfetch.io/id-0D6OFrq/w/800/h/905/theme/dark/symbol.webp?c=1dxbfHSJFAPEGdCLU4o5B"
              jobTitle="Software Engineer Intern"
              company="TikTok"
              location="Remote"
              dateRange="May 2023 – August 2023"
              bullets={[
                "Engineered algorithms and Data Structures in C++, Java, and Go on distributed systems to scatter similar products in recommendation feeds, increasing user engagement metrics by 9%.",
                "Developed and implemented APIs within the ads infrastructure to integrate product information from videos and livestreams into TikTok’s ad recommendation system, leading to a 13% increase in ad conversion rates.",
                "Led A/B experiments on over 800 million users. Analyzed user behavior and ads performance using SQL, Spark, and statistics methodologies. Achieved a 7% improvement in both user experience and ads value metrics."
              ]}
            />

            <ExperienceCard
              logoSrc="https://cdn.brandfetch.io/ididNbiiOd/w/399/h/399/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"
              jobTitle="Data Science Intern"
              company="Uber"
              location="Remote"
              dateRange="June 2022 – August 2022"
              bullets={[
                "Developed and executed SQL queries to analyze fare revenues across different regions and products, providing actionable insights and optimizing pricing strategies.",
                "Contributed to the design and implementation of frontend functionality, designed to ensure seamless user experiences and effective data visualization.",
                "Worked closely alongside cross-functional teams delivering data-driven solutions, balancing backend data analysis with frontend development to support business objectives and enhance decision making processes."
              ]}
            />

            {/* Experience section */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Education</h2>
            <Education
              logoSrc="https://cdn.brandfetch.io/idtYj3ruRz/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
              degree="Bachelor of Science in Economics"
              university="The Univeristy of Texas at Austin"
              dateRange="August 2021 - May 2025"
            />
            
            {/* Projects section */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Projects</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
