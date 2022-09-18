import Search from "./Search";

const Navbar = ({searchdata}) => {
    return ( 
        <div className="nav-bar">
          <a href="/"><h1>DuckTale</h1></a>
          <a href="/" style={{padding:'7px 15px'}} className="update-btn">Home</a>
          
          <Search  searchdata={searchdata}/>
        </div>
     );
}
 
export default Navbar;