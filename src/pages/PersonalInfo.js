import React from "react"
import { Row, Col } from "react-bootstrap"
import {Link} from "react-router-dom"
import {FiBell, FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut} from "react-icons/fi"
import Imgrob from "../assets/img/robert.png"

function PersonalInfo() {
  return ( 
    <>
    {/* Start of Header */}
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
       {/* End of Header */}

       {/* Start of Main */}
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
          {/* End of Sidebars */}
          {/* Start of Personal Info */}
          <Col className="col-8 d-flex flex-column transfer-wrap">
            <div className="d-flex flex-column py-2 my-2 mx-3">
                <div className="mx-3">
                  <img src={Imgrob} alt="head-profile"/>
                </div>
              
                <div className="py-4 px-3">
                  <span className="text-muted">We got your personal information from the sign <br/> up proccess. If you want to make changes on <br/> your information, contact our support.</span>
                </div>
              
                <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span className="text-muted">First Name</span>
                  <span>Robert</span>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span className="text-muted">Last Name</span>
                  <span>Chandler</span>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <span className="text-muted">Verified E-mail</span>
                  <span>pewdiepie1@gmail.com</span>
                </div>

                <div className="d-flex flex-column gap-2 mx-3 detail-wrap">
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column gap-2 ">
                      <span className="text-muted">Phone Number</span>
                      <span>+62 813-9387-7946</span>
                    </div>

                  <div className="p-2 m-2">
                    <Link to="/AddPhNumber" className="text-decoration-none">Manage</Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* End of Personal Info */}
        </main>
        {/* End of Main */}
        {/* Start of Footer */}
        <div className="d-flex justify-content-between flex-row p-4 footer-wrap">
              <div>
                <span className="fw-bold footer-text">2020 Zwallet. All right reserved.</span>
              </div>

              <div className="d-flex flex-row gap-3">
                <span className="fw-bold footer-cont">+62 5637 8882 9901</span>
                <span className="fw-bold footer-cont">contact@dora.com</span>
              </div>
          </div>
       {/* End of Footer */}
    </>
  )
}

export default PersonalInfo