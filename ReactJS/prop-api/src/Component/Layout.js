import { Outlet } from "react-router-dom";

const Layout = () => {
  
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
  return (
    <>
    {/* desktop Navigation */}
      <nav className="navbar1">
        <h1 className="navh1">REACTO</h1>
        <div className=" menu">
       <a className="nav-links" href="/">Home</a>        
       <a className="nav-links" href="/api">API</a>
       <a className="nav-links" href="/worldwonder">WorldsWonder</a>     
        </div></nav>
{/* sidenave on min device */}
<div id="sidenav">
<span  style={{fontSize:'30px', cursor:'pointer'}} onClick={openNav}>&#9776; REACTO</span>


<div id="myNav" className="overlay">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}   >&times;</a>
  <div className="overlay-content">
       <a className="nav-links" href="/">Home</a>        
       <a className="nav-links" href="/api">API</a>
       <a className="nav-links" href="/worldwonder">WorldsWonder</a>     
        </div>
</div>
</div>
<br />

<Outlet></Outlet>

     </>
  )
};

export default Layout;