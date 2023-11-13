import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="flex flex-col overflow-auto justify-between w-full lg:w-3/5 px-20 lg:px-40 py-10 bg-customBrown text-white">
        <div>
          <hr className="border-t-4 border-black w-full mx-auto" />
          <p className="text-sm text-montserrat text-black font-bold m-2">
            KEEPING GENERATIONAL RECIPES ALIVE.
          </p>
          <hr className="border-t-2 border-black w-full mx-auto" />
        </div>
        <div className="text-left m-8">
          <h1 className="text-6xl lg:text-9xl font-bebas mb-10 lg:mb-28">
            Shemon
            <br /> Cookbook.
          </h1>
          <button
            className="text-lg text-montserrat border-black  font-bold border-2 bg-transparent hover:bg-orange-700 hover:text-white text-black  py-3 px-6  transition duration-300 ease-in-out"
            onClick={() => navigate("/categories")}
          >
            START COOKING
          </button>
        </div>
        <div>
          <hr className="border-t-2 border-black w-full mx-auto" />
          <p className="text-left text-sm text-montserrat m-2 text-black font-bold">
            MADE BY DANIEL
          </p>
          <hr className="border-t-4 border-black w-full mx-auto" />
        </div>
      </div>

      {/* Right Side - Image Background */}
      {/* The image will be hidden on screens smaller than 'lg' */}
      <div
        className="hidden lg:block lg:w-2/5 bg-cover bg-center"
        style={{ backgroundImage: "url('./Banner.png')" }}
      >
        {/* Image goes here */}
      </div>
    </div>
  );
};

export default HomePage;
