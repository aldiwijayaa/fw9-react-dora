import React from "react"
import { Row, Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiBell, FiGrid, FiArrowUp, FiArrowDown, FiPlus, FiUser, FiLogOut} from "react-icons/fi"
import Imgrob from "../assets/img/robert.png"
import Imggraph from "../assets/img/graph.png"

function Dashboard() {
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
       <Row class="d-flex flex-row gap-3 px-2 py-4 mx-5">
          <Col md={12} className="d-flex flex-column nav-wrap p-5 m-3">
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
          <Col>
              <div className="d-flex flex-column gap-3">
                    <div className="d-flex flex-row justify-content-between align-items-center p-3 m-4 balance-wrap">
                        <div className="d-flex flex-column gap-1 p-3">
                          <span className="fw-normal balance-text">Balance</span>
                          <span className="fs-1 fw-bold balance-num">Rp120.000</span>
                          <span className="balance-text">+62 813-9387-7946</span>
                        </div>
                        <div className="d-flex flex-column gap-3">
                          <Link to="/SearchReceiver" className="text-decoration-none">
                            <div className="d-flex gap-2 icon-balance">
                              <FiArrowUp size={24} />
                              <span>Transfer</span>
                            </div>
                          </Link>
                          <Link to="/TopUp" className="text-decoration-none">
                            <div className="d-flex gap-2 icon-balance">
                              <FiPlus size={24} />
                              <span>Top Up</span>
                            </div>
                          </Link>
                        </div>
                     </div>
               </div>
          </Col>
          <Col className="d-flex flex-row gap-2 main-wrap-full">
            <Col className="rounded d-flex flex-column gap-3 p-3 m-4 main-wrap">
                  <div class="d-flex flex-row p-2 justify-content-between">
                      <div class="d-flex flex-column gap-2">
                          <FiArrowDown size={24} />
                          <span class="fw-normal ">Income</span>
                          <span class="fw-bold ">Rp2.120.000</span>
                      </div>
                      <div class="d-flex flex-column gap-2">
                           <FiArrowUp size={24} />
                          <span class="fw-normal ">Expense</span>
                          <span class="fw-bold ">Rp1.560.000</span>
                      </div>
                  </div>
                  <div class="d-flex justify-content-center">
                      <img src={Imggraph} alt="Graphic" />
                  </div>
             </Col>
          </Col>        
       </Row>
       <div className="d-flex justify-content-between flex-row p-4 footer-wrap">
          <div>
            <span className="fw-bold footer-text">2020 dora. All right reserved.</span>
          </div>

          <div className="d-flex flex-row gap-3">
            <span className="fw-bold footer-cont">+62 5637 8882 9901</span>
            <span className="fw-bold footer-cont">contact@dora.com</span>
          </div>
      </div>
    </>
  )
}

export default Dashboard

