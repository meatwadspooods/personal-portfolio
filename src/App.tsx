import "./App.css";
import "./index.css";
import Header from "./components/header";
import Headshot from "./components/headshot";
import Socials from "./components/socials";

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
              <p>
              I'm a Software Engineer at the University of Texas in Austin building systems to help connect customers to international products from all over the world. My philosophy in creating and design is to build in order to learn and make the peoples lives around me easier and more fun.
              </p>

              <p>
              I've previously worked at Amazon, building crossborder software, Goldman Sachs, determining market risk and PricewaterhouseCooper, helping non-profits.
              </p>
            </div>
            
            {/* Skills section */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Skills</h2>
            <p>
            I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
            </p>
            <p>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
            <p>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
            {/* Skills content */}
            
            {/* Experience section */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Experience</h2>
            {/* Experience content */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
