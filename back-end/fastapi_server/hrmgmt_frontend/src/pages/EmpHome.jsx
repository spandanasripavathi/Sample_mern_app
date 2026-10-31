

function EmpHome(){
    let currentuser=JSON.parse(localStorage.getItem("currentuser"))

    return(<div>
        <h1>Employee home</h1>
        <h2>Welcome {currentuser.name}</h2>
    </div>)
}
export default EmpHome