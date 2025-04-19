import headshot from "../assets/headshot.jpg";

const Headshot = () => {
  return (
    <div className="w-[150px] h-[150px] rounded-full relative overflow-hidden mb-4">
      <img
        src={headshot}
        alt="Adam Elhamdi headshot"
        className='className="w-full h-full object-cover"'
      />
    </div>
  );
};

export default Headshot;
