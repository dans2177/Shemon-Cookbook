import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-10 bg-green-900 h-full">
      <h1 className="text-4xl font-bold mb-5">Family Cookbook</h1>
      <button
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/categories")}
      >
        Start Cooking
      </button>
    </div>
  );
};

export default HomePage;
