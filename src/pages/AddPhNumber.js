import React from "react"
import { Row, Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiBell, FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut} from "react-icons/fi"
import Imgrob from "../assets/img/robert.png"

function AddPhNumber() {
  return (
    <>
    <Row className="d-flex flex-row align-items-center mw-100 m-0 header-full-wrap">
         <Col className="col">
            <div className="d-flex justify-content-start p-5">
              <span className="fw-bold fs-2 head-logo"><Link to="/Dashboard" className="text-decoration-none">DORA</Link></span>
            </div>
         </Col>
        
         <Col>
            <div className="d-flex align-items-center justify-content-end p-5">
               <Link to="/Profile" className="text-decoration-none text-muted">
                 <div>
                   <img src={Imgrob} alt="head-profile"/>
                 </div>
               </Link>
               <div className="d-flex flex-column head-wrap">
                  <span className="fw-bold">Robert Chandler</span>
                  <span className="fw-normal prof-num">+62 8139 3877 7946</span>
               </div>
              
              <div>
                <FiBell size={24} />
              </div>
            </div>
         </Col>
       </Row>
       <main class="d-flex flex-row gap-3 px-2 py-5 mx-5">
          {/* Start of Sidebars */}
          <Col className="col-3 d-flex flex-column nav-wrap gap-5 p-5 m-3">
            <div className="d-flex flex-column gap-5">
                  <Link to="/History" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 icon-nav">
                      <FiGrid size={24} />
                      <span>Dashboard</span>
                    </div>
                  </Link>
                  <Link to="/SearchReceiver" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 icon-nav">
                      <FiArrowUp size={24} />
                      <span>Transfer</span>
                    </div>
                  </Link>
                  <Link to="/Topup" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 icon-nav">
                      <FiPlus size={24} />
                      <span>Top Up</span>
                    </div>
                  </Link>
                  <Link to="/Profile" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 icon-nav">
                      <FiUser size={24} />
                      <span>Profile</span>
                    </div>
                  </Link>
                  <Link to="/Login" className="text-decoration-none text-muted">
                    <div className="d-flex flex-row gap-3 logout icon-nav">
                      <FiLogOut size={24} />
                      <span>Logout</span>
                    </div>
                  </Link>
            </div>
          </Col>
          <Col className="col-8 d-flex flex-column transfer-wrap">
            <div className="d-flex flex-column py-2 my-2 mx-3">
              <div className="px-3">
                <span>Add Phone Number</span>
              </div>
              <div className="py-4 px-3">
                  <span className="text-muted">Add at least one phone number for the transfer <br/> ID so you can start transfering your money to <br/>another user.</span>
              </div>
              <div className="d-flex flex-column p-5 m-5">
                <div className="d-flex flex-row m-5">
                  <div className="input-group flex-nowrap change-wrap">
                    <span className="input-group-text icon-change">
                      <i data-feather="phone"></i>
                      <span className="fw-bold text-muted px-2">+62</span>
                    </span>
                    <input type="number" className="form-control input-change" placeholder="Enter your phone number"/>
                  </div>
                </div>
                <Link to="/ManagePhNumber" className="text-decoration-none">
                  <div className="d-grid m-5">
                    <button className="btn btn-primary btn-lg fw-bold button-change">Add Phone Number</button>
                  </div>
                </Link>  
              </div>
            </div>
          </Col>
        </main>
        <div className="d-flex justify-content-between flex-row p-4 footer-wrap">
              <div>
                <span className="fw-bold footer-text">2020 Zwallet. All right reserved.</span>
              </div>
              <div className="d-flex flex-row gap-3">
                <span className="fw-bold footer-cont">+62 5637 8882 9901</span>
                <span className="fw-bold footer-cont">contact@dora.com</span>
              </div>
          </div>
    </>
  ) 
}

export default AddPhNumber