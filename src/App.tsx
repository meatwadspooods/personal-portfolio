import "./App.css";
import "./index.css";
import Header from "./components/header";
import Headshot from "./components/headshot";
import Socials from "./components/socials";
import ExperienceCard from "./components/experience";
import Education from "./components/education";
import ProjectsCard from "./components/projects";
import ResearchCard from "./components/research";
import uhLogo from './assets/University_of_Houston_seal.svg';

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">

        {/* Left Div */}
        <div className="fixed lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <Headshot/>
            <Header />
            <Socials />
          </div>

          {/*worried abot window sizing here, seems to work alriiiight tho*/}
          <div className="flex flex-col">
            <ul>
              <li className="pb-5">
                <Education
                  logoSrc= {uhLogo}
                  degree="B.S. Computer Science"
                  university="The Univeristy of Houston"
                  dateRange="August 2025 - May 2028"
                />
              </li>

              <li className="pt-5">
                <Education
                  logoSrc="https://cdn.brandfetch.io/idtYj3ruRz/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
                  degree= "B.S. Economics<br />Minor in Computer Science"
                  university="The Univeristy of Texas at Austin"
                  dateRange="August 2021 - May 2025"
                />
              </li>
            </ul>
          </div>

        </div>

        {/* Right Div */}
        <div className="pt-24 lg:w-[52%] lg:py-24">
          <div className="text-left max-w-3xl">
            <div className="text-gray-300 mb-4 space-y-6">
              <h2 className="text-4xl font-bold text-white underline">About</h2>
              <p>
                I'm a computer science student at the University of Houton passionate about building software that blends engineering with real-world impact. I previously attended The University of Texas at Austin where I earned a B.S. in Economics, a Minor in Computer Science, and a minor in Arabic. My philosophy in creating and design is to build in order to learn and make the lives of people around me easier and more fun.
              </p>

              <p>
                I've previously worked at Tiktok, scaling ad infrastructure, Cisco Duo Security, building secure backend testing tools, and Uber, analyzing revenue.
              </p>
            </div>
            
            {/* Experience section */}
            <h2 className="text-4xl font-bold text-white mt-12 mb-6 underline">Experience</h2>
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

            {/* Education section       added it to the left side instead of the right*/}
            {/* <Education
              logoSrc= {uhLogo}
              degree="B.S. Computer Science"
              university="The Univeristy of Houston"
              dateRange="August 2025 - May 2028"
            />

            <Education
              logoSrc="https://cdn.brandfetch.io/idtYj3ruRz/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
              degree={<>
                        B.S. Economics
                        <br />
                        Minor in Computer Science
                      </>}
              university="The Univeristy of Texas at Austin"
              dateRange="August 2021 - May 2025"
            /> */}

            {/*Research Section*/}   
            <h2 className="text-4xl font-bold text-white mt-12 mb-6 underline">Research</h2>
 
            <ResearchCard
              researchTitle = "Applied Machine Learning Lab Research Assistant"
              lab = "Oden Institute for Computational Engineering and Sciences"
              location = "University of Texas at Austin"
              dateRange = "September 2022 – Decemeber 2022"
              bullets = {["Analyzed multimodal datasets (60+ EEG participants, 10,000+ behavioral samples) using Python, achieving 92% classification accuracy in cognitive state prediction models.",
                          "Designed and implemented various convolutional neural network architectures to make predictions based on time-series data with PyTorch.",
                          "Distributed model training in a cloud GPU cluster with Kubernetes to reduce training time by 50%.",
                        ]}
            />

            {/* Projects Section */}
            <h2 className="text-4xl font-bold text-white mt-12 mb-6 underline">Projects</h2>

            <ProjectsCard
              projectTitle = "Distributed Key-Value Store"
              technologies = "Go, Git Docker"
              dateRange = "February 2023 – Present"
              bullets = {["Developing the back-end API of a distributed, fault tolerant, consistent, and sharded key-value store.",
                          "Utilizing Goroutines for concurrency when handling client and internal HTTP requests for system communication.",
                        ]}
            />

            <ProjectsCard
              projectTitle = "TagMe"
              technologies = "Electron, Go, Git, Node.js, HTML/CSS"
              dateRange = "January 2022 – March 2022"
              bullets = {["Worked in an Agile team to make a cross platform, full stack desktop application to search files by custom tags.",
                          "Responsible for UI and frontend functionality, designed and implemented backend unit tests in Node.js.",
                        ]}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
