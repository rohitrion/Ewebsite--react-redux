import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { DLT } from '../Redux/actions/action';
const Header = () => {

    const [price, setprice] = useState();

    const getdata = useSelector((state) => state.cartreducer.carts)
    console.log(getdata)

    const dispatch = useDispatch();

    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.qnty + price
        })
        setprice(price)
    }

    useEffect(() => {
        total()
    }, [total])


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (



        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>

                    <NavLink to="/" className="text-decoration-none text-light mx-3"  >  <img style={{ height: 50, paddingRight: "5rem" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsCwycexoYyfXX0sQ-8PGFACk2wo_nRfDL6o4PPW_SA&s' /></NavLink>
                    <NavLink to="/fav" className="text-decoration-none text-light mx-3"  >Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light" >Home</NavLink>

                    </Nav>
                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <AddShoppingCartIcon color='primary' style={{ fontSize: '25', cursor: "pointer" }} />
                    </Badge>


                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                               
                                                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                    <img src={e.imgdata} alt="yo" style={{ width: '5rem', height: "5rem" }} />

                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                            <br/>
                                                                <p>{e.rname}</p>
                                                                <p>price :₹{e.price}</p>
                                                                <p>Quantity :{e.qnty}</p>
                                                                <p >
                                                                    <DeleteForeverIcon onClick={() => dlt(e.id)} style={{ color: 'red', fontSize: 25, cursor: "pointer" }} />
                                                                </p><hr/>
                                                            </td>

                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }  <br/>
                                        <p className='text-center'>Total : ₹ {price}</p>

                                    </tbody>

                                </Table>

                            </div> :
                            <div className='card_details d-flex justify-content-centre align-items-center' style={{ width: "24rem", padding: 10, position: 'relative' }}>
                                <CloseIcon onClick={handleClose} style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }} />
                                <p style={{ fontsize: 22 }}>your cart is empty</p><br />
                                <ShoppingCartIcon style={{ padding: 1, width: "5rem", fontSize: '35' }} />
                            </div>
                    }


                </Menu>

            </Navbar>



        </>



    )
}

export default Header