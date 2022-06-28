
import "./navbar.css";
import img from "./logo.png";
import img1 from "./profile.jpeg";
import { FiHeart } from "react-icons/fi";
import { FiBell} from "react-icons/fi";
import { FiMail} from "react-icons/fi";
import { FiMessageSquare} from "react-icons/fi";
import { FaTh } from "react-icons/fa";
import { FiSearch} from "react-icons/fi";
import {Link} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Friendreq from "./friendrequest.json";
import{useState} from "react";
import img3 from "./images/daniel.jpg";





export default function Navbar() {
    const [dropdown,setDropdown]=useState(false);
    return(
   <>
   
        < div className="navbarContainer">
             < div classname="navbarLeft">
                <div style={{display:"flex"}}>
                    <img src={img} alt="logo" className="logo"></img>
                    <FiHeart className="heartIcon" onClick={()=>{setDropdown(!dropdown)}}/>
                    {dropdown && <div style={{position:"absolute",marginTop:"60px" }}className="bg" >
                        {Friendreq.map((req)=>{
                return(
        <div  >
            <img src={img3} width="20px"></img>
          {req.name}
          <br/>
          {req.content}
          <br/>
          
          </div>
                )
              })}

                        </div>
                        }
                
                    
                    <FiBell className="notificationIcon"/> 
                    <FiMail className="mailIcon"/>
                    <FiMessageSquare className="chatIcon"/> 
                    <Link to= "explore">
                        <FaTh className="exploreIcon" />
                    </Link>
                    </div>
                    
                    </div>
                    
            
            

            <div className="searchbar">
            <FiSearch className="searchIcon"/> 
                <input placeholder="Search" className="searchInput" />
            </div>

            <div classname="navbarRight">
                <FaShoppingCart className="shoppingcartIcon" />
                <img src={img1} alt="profile" className="profileImg"></img>  
            </div>
            



        </div>
</>
          
    )
}
