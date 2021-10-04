import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom';

class Invoice extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/invoicelist">List</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/addinvoice">Add</Link>
                            </li>   
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default withRouter(Invoice);