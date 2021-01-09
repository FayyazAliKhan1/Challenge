import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../MyContext';
const Navbar = () => {
  const cartItems = useContext(MyContext).cartItems;

  // const authLinks = (
  //   <ul>
  //     <li>
  //       <Link to="/profiles">Developers</Link>
  //     </li>
  //     <li>
  //       <Link to="/posts">Posts</Link>
  //     </li>
  //     <li>
  //       <Link to="/dashboard">
  //         <i className="fas fa-user" />{" "}
  //         <span className="hide-sm">Dashboard</span>
  //       </Link>
  //     </li>
  //     <li>
  //       <a onClick={logout} href="/">
  //         <i className="fas fa-sign-out-alt" />{" "}
  //         <span className="hide-sm">Logout</span>
  //       </a>
  //     </li>
  //   </ul>
  // );
  //   const guestLinks = (
  //     <ul>
  //       <li>
  //         <Link to='/'>Pic Some</Link>
  //       </li>
  //       <li>
  //         <Link to='/cart'>
  //           <i className='fab fa-facebook fa-2x'></i>
  //         </Link>
  //       </li>
  //     </ul>
  //   );
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fa fa-image' /> Pic Some
        </Link>
      </h1>
      <h1>
        <Link to='/cart'>
          <i
            className={
              cartItems.length > 0
                ? 'fa fa-shopping-cart'
                : 'fa fa-cart-arrow-down'
            }
          >
            {cartItems.length > 0 ? 'Cart have items' : 'Cart is Empty'}
          </i>
        </Link>
      </h1>
      {/* <Fragment> {guestLinks}</Fragment> */}
    </nav>
  );
};
export default Navbar;
