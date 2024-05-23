import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = ({setCategory}) => {
  return (
    <div >
        <nav Class="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark" >
  <div Class="container-fluid">
    <a Class="navbar-brand badge text-danger bg-light fs-4 " href="#"><span Class="">News Time</span></a>
    <button Class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span Class="navbar-toggler-icon"></span>
    </button>
    <div Class="collapse navbar-collapse" id="navbarNav">
      <ul Class="navbar-nav">
        <li Class="nav-item">
          <div Class="nav-link active" onClick={()=> setCategory("technology")}>Technology</div>
        </li>
        <li Class="nav-item">
          <div Class="nav-link active" onClick={()=> setCategory("business")}>Business</div>
        </li>
        <li Class="nav-item">
          <div Class="nav-link active"onClick={()=> setCategory("health")} >Health</div>
        </li>
        <li Class="nav-item">
          <div Class="nav-link active"onClick={()=> setCategory("sports")} >Sports</div>
        </li>
        <li Class="nav-item">
          <div Class="nav-link active" onClick={()=> setCategory("entertainment")}>Entertainment</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar;
