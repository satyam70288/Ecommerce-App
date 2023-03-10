import React, { Fragment,useContext,useEffect } from 'react'


import { NavLink ,useNavigate} from 'react-router-dom'
import Cart from '../UI/Cart/Cart'
import cartContext from '../../Store/Context'
import './NavBar.css'


const NavBar = () => {
    const navigate=useNavigate();
    const pro=useNavigate();
    const ctx=useContext(cartContext);
const {items}=ctx;
   


const logoutHandler=()=>{
    console.log(ctx);
    ctx.logout();
    
    console.log(ctx);
    navigate('/login');
}   
 let NoItem;
NoItem=ctx.items.reduce((curr,item)=>curr+item.quantity
,0);

// const totalAmount=ctx.items.reduce((curr,item)=>curr+item.quantity,0)

    //  const numberOfItems=items.length;
    //  ((curr,item)=>(curr)+ Number(item.quantity)
    // ,0);

  return (
   <Fragment>
    <div className='nav-main-div'>
        <div className='nav-sub-div'>
        <NavLink className='nav-sub' to='/'>Home</NavLink>
        <NavLink className='nav-sub' to='/store'>Store</NavLink>
        <NavLink className='nav-sub' to='/about'>About</NavLink>
        <NavLink className='nav-sub' to='/contact'>Contact</NavLink>
        
        {!ctx.isLoggedIn && <NavLink className='nav-sub-com' to='/login'>
            <button type="button" className="btn btn-primary login-btn">Login</button>
        
        </NavLink>
        }
                {ctx.isLoggedIn && <NavLink className='nav-sub' to='/profile'>Profile</NavLink>}

        {ctx.isLoggedIn && <NavLink className='nav-sub-com' to='/login'>
            <button type="button" className="btn btn-primary login-btn" onClick={logoutHandler} >Logout</button>
        </NavLink>}

         {/* <NavLink to='/cart'>
            <button type="button" className="btn btn-primary cart-btn btn-lg"><Cart /></button>
        </NavLink>  */}
         {ctx.isLoggedIn &&  <Cart />}

        <p className='cart-item-no'>  {NoItem}</p>
        </div>
    </div>
   </Fragment>
  )
}

export default NavBar;
 