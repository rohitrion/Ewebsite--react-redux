
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { autocompleteClasses, Table } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { DLT, ADD, REMOVE } from '../Redux/actions/action';
import { red } from '@mui/material/colors';
import { flexbox, padding } from '@mui/system';

const Fav = () => {



  const [price, setprice] = useState();

  const getdata = useSelector((state) => state.cartreducer.carts)
  console.log(getdata)

  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e))
  }

  const remove = (item) => {
    dispatch(REMOVE(item))

  }

  const dlt = (id) => {
    dispatch(DLT(id))
  }

  // const total = () => {
  //   let price = 0;
  //   getdata.map((ele, k) => {
  //     price = ele.price * ele.qnty + price
  //   })
  //   setprice(price)
  // }

  // useEffect(() => {
  //   {console.log("this is it ")}
  //   total()
  // }, [total])


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  const history = useNavigate()















  return (
    <>



      <div className='contianer mt-3' >

        <h2 className='text-center'> The Shopify App</h2>
        <br></br>
        <br></br>
        {
          getdata.length ?
            <div className='container' style={{ justifyContent: 'center', marginRight: 100, paddingLeft: 400, border: "1px solid black" }}>
              <div className='card_details' style={{ width: "50rem", padding: 10, }}>
                <Table >
                  <thead>
                    <tr>
                      <th> <h3>Photo</h3> </th>
                      <th><h3>Restaurant Name</h3></th>
                    </tr>
                    <br></br>
                  </thead>
                  <tbody>
                    {
                      getdata.map((e) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                  <img src={e.imgdata} alt="yo" style={{ width: 200, height: 200, }} />

                                </NavLink>
                                <br />
                                <br />
                                <hr />


                              </td>
                              <td>
                                <div className='container' style={{ paddingBottom: 50 }}>
                                  <p><h3>{e.rname}</h3></p>
                                  <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 70, height: 30, cursor: "pointer", background: "#ddd", color: "#111", marginBottom: 10 }}>
                                    <span onClick={e.qnty <= 1 ? () => dlt(e.id) : () => remove(e)} style={{ fontSize: 24 }}>-</span>
                                    <span style={{ fontSize: 24 }}>{e.qnty}</span>
                                    <span onClick={() => send(e)} style={{ fontSize: 24 }}>+</span>
                                  </div>

                                  <p>price :₹{e.price}</p>
                                  <p>Quantity :{e.qnty}</p>

                                  <p >

                                    <DeleteForeverIcon onClick={() => dlt(e.id)} style={{ color: 'red', fontSize: 40, cursor: "pointer" }} />

                                    <hr style={{ marginTop: 48 }} />
                                  </p>
                                </div>
                              </td>

                            </tr>
                          </>
                        )
                      })
                    }

                    <button onClick={()=>history('/cheakout')} style={{ width: "175%", fontSize: 20, height: 40, justifyContent: 'center', backgroundColor: 'yellow' }}>Proceed to cheakout</button>
                  </tbody>

                </Table>

              </div> </div> :
            <div className='mt-container' style={{ fontSize: "70px", width: 50, paddingLeft: 650, justifyContent: 'center', }}>

              <p style={{ fontsize: 22 }}>your cart is empty   <ShoppingCartIcon style={{ fontSize: '40' }} /></p>

            </div>
        }



      </div>











    </>



  )
}

export default Fav