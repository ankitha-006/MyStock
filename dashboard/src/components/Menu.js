import React,{useState} from "react";
import {Link} from "react-router-dom";
const Menu = () => {
  const [selectedMenu,setSelectedMenu]=useState(0);
   const [isProfileDropdownOpen,setisProfileDropdownOpen]=useState(false);
   const handleMenuClicks=(index)=>{
    setSelectedMenu(index);
   }
    const handleProfileClick=(index)=>{
    setisProfileDropdownOpen(!isProfileDropdownOpen);
   }
   const menuClass="menu";
   const activemenuClass="menu selected";
  return (
    <div className="menu-container">
      <img src="media/logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClicks(0)}>
            <p className={setSelectedMenu===0?activemenuClass:menuClass}>Dashboard</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleMenuClicks(1)}>
            <p className={setSelectedMenu===1?activemenuClass:menuClass} >Orders</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleMenuClicks(2)} >
            <p className={setSelectedMenu===2?activemenuClass:menuClass}>Holdings</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuClicks(3)}>
            <p className={setSelectedMenu===3?activemenuClass:menuClass}>Positions</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuClicks(3)}>
            <p className={setSelectedMenu===4?activemenuClass:menuClass}>Funds</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleMenuClicks(5)}>
            <p className={setSelectedMenu===5?activemenuClass:menuClass}>Apps</p></Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        
      </div>
    </div>
  );
};

export default Menu;