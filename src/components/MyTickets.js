import React from 'react'

const MyTickets = () => {
  return (
    <div>
      <section class="h-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-10 col-xl-8" style={{ width: "100vw" }}>
              <div class="card" style={{ backgroundColor: "#ECF9E1" }}>
                <div class="card-body p-4">
                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <p class="lead fw-bold mb-0">Receipt</p>
                    <p class="small text-muted mb-0">
                      Receipt Voucher : 1KAU9-84UIL
                    </p>
                  </div>
                  <div
                    class="card shadow-0 border mb-4"
                    style={{ backgroundColor: "#ECF9E1" }}
                  >
                    <div class="card-body">
                      <div class="row" style={{ gap: "30px" }}>
                        <div class="col-md-2">
                          <img
                            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            class="img-fluid"
                            alt="Phone"
                          />
                        </div>
                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p class="fw-bold mb-0">
                            Ace Productions - Broken Images
                          </p>
                        </div>
                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small">2 Attendees</p>
                        </div>
                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small">NEXEN SQUARE Mall</p>
                        </div>
                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small">
                            Event On 24th Aug, 2023
                          </p>
                        </div>
                      </div>
                      <hr
                        class="mb-4"
                        style={{ backgroundColor: "#e0e0e0", opacity: "1" }}
                      />
                      <div class="row d-flex align-items-center">
                        <div class="col-md-2">
                          <p class="text-muted mb-0 small">Track Order</p>
                        </div>
                        <div class="col-md-10">Event Booked</div>
                      <button className='btn mt-5' style={{margin:'0px 0px',padding:'5px 0px'}}>Download</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyTickets