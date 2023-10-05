import Header from "../SharedComponent/Header";
import NavBar from "../SharedComponent/NavBar";
import BreakingNews from "./BreakingNews";
import LeftSIdeNav from './../SharedComponent/LeftSIdeNav';
import RightSideNav from "../SharedComponent/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>
      <div className="grid grid-cols-4 text-center gap-3">
        <div className="p-3 border rounded-lg h-fit">
            <LeftSIdeNav></LeftSIdeNav>
        </div>
        <div className="col-span-2 p-3 border rounded-lg h-fit">
            <h2>this is content</h2>
        </div>
        <div className="p-3 border rounded-lg h-fit">
            <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
