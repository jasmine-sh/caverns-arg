import {Link} from "react-router-dom";

export default function Home()
{
    return(
        <div>
            <nav className="sidebar">
                <ul>
                    <Link to="/" class="list"> Home </Link>
                    <br/>
                    <Link to="/about" class="list"> About</Link>
                </ul>
            </nav>
        </div>
    )
}