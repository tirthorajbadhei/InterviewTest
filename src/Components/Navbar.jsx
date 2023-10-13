import "../App.css"
import { Link } from "react-router-dom"
const Navbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <h1>LoGo</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse dashboardElement" id="navbarNav" >
                    <ul class="navbar-nav text-end">
                        <li class="nav-item text-end">
                            <Link class="nav-link active" aria-current="page" to="/">DASHBOARD</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/createAds">CREATE ADS</Link>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>

    </>
}
export default Navbar