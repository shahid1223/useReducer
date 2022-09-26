import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Card } from './Context'
import Context from './Context';

const Navbar = () => {

  const { dispatch, state } = useContext(Card);

  const singleProduct = async () => {
    const data = await fetch('https://fakestoreapi.com/products/1');
    const result = await data.json();
    console.log(data)
    // console.log("data", result)
    dispatch({ type: "setSingleProduct", payload: result });
    console.log("context", state)
  };





  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex align-center" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="button" onClick={() => singleProduct()}>Search</button>
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar