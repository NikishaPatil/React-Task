import "./home.css";
import Navbar from "./Navbar";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import PostSide from "./Postside";


function Home(){
    return(
        <>
        <Navbar/>
            <div className="home-Container">
             <Leftbar />
             <PostSide/>
            <Rightbar /> 
            </div> 

        </>
    );
}
export default Home;