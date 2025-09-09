import Button from "./button";
import resume1 from "../assets/Elhamdi-Adam-Resume.pdf";
import {
  FaFileDownload,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

const Socials: React.FC = () => {
  const handleResumeClick = (): void => {
    //download my resume through the browser
    const url: string = resume1;
    const link: HTMLAnchorElement = document.createElement("a");
    link.href = url;
    link.download = "Elhamdi-Adam-Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="mt-6 flex items-center space-x-3">
      {/* resume button w custom styling */}
      <Button
        className="bg-[#1b1b1f] hover:bg-white hover:text-[#1b1b1f] transition duration-300 mr-4 border border-white"
        onClick={handleResumeClick}
      >
        <FaFileDownload className="w-5 h-5 mr-2" /> Resume
      </Button>

      {/*logo buttons*/}
      <a
        href="https://github.com/meatwadspooods"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="cursor-pointer ml-3 text-gray-400 hover:text-white transition duration-300 w-7 h-7" />
      </a>

      <a
        href="mailto:elhamdiadam@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope className="cursor-pointer text-gray-400 hover:text-white transition duration-300 w-7 h-7" />
      </a>

      <a
        href="https://www.linkedin.com/in/adamelhamdi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="cursor-pointer text-gray-400 hover:text-white transition duration-300 w-7 h-7" />
      </a>
    </section>
  );
};

export default Socials;
