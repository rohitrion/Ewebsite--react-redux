import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT, ADD, REMOVE } from '../Redux/actions/action';
const CardsDetails = () => {


  const history = useNavigate()
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e))
  }


  const dlt = (id) => {
    dispatch(DLT(id))
    history("/")
  }

  const remove = (item) => {
    dispatch(REMOVE(item))

  }


  const [data, setdata] = useState([])

  const { id } = useParams();

  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    })
    setdata(comparedata);
  }

  useEffect(() => {
    compare();
  }, [id])

  return (
    <>
      <div className='container mt-2'>
        <h2 className='text-center'>Items Detail page</h2>

        <section className='mt-3'>
          <div className='iteamsdetails'>
            {
              data.map((ele) => {
                return (
                  <>
                    <div className='items_img'>
                      <img src={ele.imgdata} />
                    </div>


                    <div className='details'>
                      <Table>
                        <tr>
                          <td>
                            <p> <strong>Restaurant</strong> : {ele.rname} </p>
                            <p> <strong>Price</strong> :₹ {ele.price}  </p>
                            <p> <strong>Dishes</strong> : {ele.address}</p>
                            <p> <strong>Total</strong> : ₹ {ele.price * ele.qnty}  </p>
                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                              <span onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)} style={{ fontSize: 24 }}>-</span>
                              <span style={{ fontSize: 24 }}>{ele.qnty}</span>
                              <span onClick={() => send(ele)} style={{ fontSize: 24 }}>+</span>
                            </div>
                          </td>
                          <td>
                            <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★	</span></p>
                            <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
                            <p ><strong>Remove :</strong> <span ><DeleteIcon onClick={() => dlt(ele.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }} /></span></p>
                          </td>
                        </tr>


                      </Table>
                    </div>

                  </>
                )
              })
            }


          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails