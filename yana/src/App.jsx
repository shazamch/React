import SideBar from "./components/SideBar";
import Table from './components/Table';

function App() {
  return (
    <div className="flex bg-gray-100 w-screen h-screen">
      <SideBar className="w-64 h-screen" />
      <div className="flex-grow p-4">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded"
          />
        </div>
        
        {/* Tiles */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-white text-gray-800 text-center p-4 rounded">Tile 1</div>
          <div className="bg-white text-gray-800 text-center p-4 rounded">Tile 2</div>
          <div className="bg-white text-gray-800 text-center p-4 rounded">Tile 3</div>
          <div className="bg-white text-gray-800 text-center p-4 rounded">Tile 4</div>
        </div>
        
        {/* Table */}
        <div className="overflow-auto h-[calc(89vh-4rem)] overflow-x-hidden ">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
