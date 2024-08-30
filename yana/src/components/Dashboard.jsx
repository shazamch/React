import SideBar from "./SideBar";
import Table from './Table';
import SearchBar from './SearchBar';
import Tiles from './Tiles';

function Dashboard() {
  return (
    <div className="flex bg-gray-100 w-screen h-screen">
      <SideBar className="w-64 h-screen" />
      <div className="flex-grow p-4">
        <SearchBar />
        <div className="grid grid-cols-4 gap-4 mb-4">
          <Tiles src="./src/assets/SideBar SVGs/active users.svg" tag="Current Active Customers" num="75"/>
          <Tiles src="./src/assets/SideBar SVGs/Delivered.svg" tag="Total Orders Delivered" num="324"/>
          <Tiles src="./src/assets/SideBar SVGs/order cancel.svg" tag="Total Orders Canceled" num="35"/>
          <Tiles src="./src/assets/SideBar SVGs/revenue.svg" tag="Total Revenue" num="$400,000"/>
        </div>
        <div className="h-[calc(79vh-4rem)]  overflow-y-auto overflow-x-hidden">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
