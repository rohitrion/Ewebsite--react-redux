import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBValidation,
  MDBValidationItem,


  MDBCheckbox
} from 'mdb-react-ui-kit';

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const Cheakout = () => {

  const [data, setdata] = useState("");
  const [sec, setsec] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
      

  }

  const showToastMessage = (e) => {
    e.preventDefault();
    toast.success('Thank you for shopping  !', {
      position: toast.POSITION.TOP_CENTER

    });
  }







  const [price, setprice] = useState();

  const getdata = useSelector((state) => state.cartreducer.carts)
  console.log(getdata)

  const dispatch = useDispatch();


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





  return (
    <div className='row g-3'>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard>
                <MDBCardBody className="p-4">
                  <MDBRow>
                    <MDBCol lg="7">
                      <MDBTypography tag="h5">
                        <NavLink to="/" className="text-decoration-none text-light" >          <a href="#!" className="text-body">

                          <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                          shopping
                        </a>   </NavLink>

                      </MDBTypography>

                      <hr />


                    </MDBCol>

                    <MDBCol className=" align-items-center " lg="15">
                      <MDBCard className="bg-primary text-white rounded-3 align-items-center ">
                        <MDBCardBody>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h5" className="mb-0">
                              Card details
                            </MDBTypography>
                            <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                          </div>

                          <p className="small">Card type</p>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-visa fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-amex fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                          </a>


                          <form onSubmit={(e) => { handleSubmit(e); showToastMessage(e) }} className="row g-0"  >
                            <label>Enter your name</label><br />
                            <input lg="20" placeholder='Name'
                              type="text"
                              required
                              value={data}
                              onChange={(e) => setdata(e.target.value)}
                            />
                            <hr /><br />
                            <label>Enter your Address</label><br/>
                            <input 
                              type="text" placeholder='Address'
                              required
                              value={sec}
                              onChange={(e) => setsec(e.target.value)}
                            />
                            <hr/><br/>

                            <input type="submit" style={{fontSize:15}}  class="btn btn-success"  />
                            <ToastContainer />
                          </form>

                          <hr />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">₹ {price}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">₹ 20.00</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">₹ {price + 20}</p>
                          </div>

                          <MDBBtn color="info" block size="lg">
                            <div className="d-flex justify-content-between">
                              <span>₹ {price + 20}</span>
                              <div>
                                <span>
                                  {/* <MDBBtn onClick={showToastMessage} type='submit' >Checkout{" "}
                                    <ToastContainer />     </MDBBtn> */}

                                  <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                </span>
                              </div>
                            </div>






                          </MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

      </section>

    </div>



  )
}

export default Cheakout


