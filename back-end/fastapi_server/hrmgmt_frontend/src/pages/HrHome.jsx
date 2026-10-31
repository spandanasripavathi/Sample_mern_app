import { userNavigate }from "react-dom"
function HrHome(){
    let navigate=userNavigate()
    let currentuser=JSON.parse(localStorage.getItem("currentuser"))
    //JSON.parse()
    let handleLogout=(e)=>{
    localStorage.removeItem("currentuser")
    navigate("/login")
    }
    return(<div>
        <h1>HR homepage</h1>
        <h2>Welcome {currentuser.name}</h2>
        <button onclick={handleLogout}>Logout</button>
    </div>)
}
export default HrHome