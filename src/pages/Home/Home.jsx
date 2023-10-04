import Header from "../SharedComponent/Header";
import NavBar from '../SharedComponent/NavBar';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <h1 className="text-3xl font-bold text-center">this is home component</h1>
        </div>
    );
};

export default Home;