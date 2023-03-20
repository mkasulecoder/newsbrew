import Link from "next/link";
import Image from "next/image";
import { BiBuildingHouse } from "react-icons/bi";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
          <Link href='/' className='navbar-brand'>
            <BiBuildingHouse width={72} height={46} />
          </Link>
          <button
            type='button'
            className='navbar-toggler'
            data-bs-toggle='collapse'
            data-bs-target='#navbarCollapse'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <div className='navbar-nav ms-auto text-capitalize'>
              <Link href='/build-on-lot/' className='nav-item nav-link active'>
                Top Stories
              </Link>
              <Link href='/build-on-lot/' className='nav-item nav-link'>
                Tech News
              </Link>
              <Link href='/build-on-lot/' className='nav-item nav-link'>
                Cryto
              </Link>
              <Link href='/build-on-lot/' className='nav-item nav-link'>
                Business
              </Link>
            </div>

            <div className='navbar-nav ms-auto'>
              <a
                className='nav-item nav-link'
                href='#myModal'
                role='button'
                data-bs-toggle='modal'
              >
                Login / Sign Up
              </a>

              {/* Login Modal */}
              <div id='myModal' className='modal fade' tabIndex='-1'>
                <div className='modal-dialog modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title ms-auto'>Login / Sign Up</h5>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                      ></button>
                    </div>
                    <div className='modal-body'>
                      <div className='row'></div>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='mb-3 position-relative'>
                            <label className='form-label' htmlFor='inputEmail'>
                              Email
                            </label>
                            <input
                              type='email'
                              className='form-control'
                              id='inputEmail'
                              placeholder='Email'
                              required
                            />
                            <div className='invalid-tooltip'>
                              Please enter a valid email address.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='mb-3 position-relative'>
                            <label
                              className='form-label'
                              htmlFor='inputPassword'
                            >
                              Password
                            </label>
                            <input
                              type='password'
                              className='form-control'
                              id='inputPassword'
                              placeholder='Password'
                              required
                            />
                            <div className='invalid-tooltip'>
                              Please enter your password to continue.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className=' col-12'>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              id='checkRemember'
                            />
                            <label
                              className='form-check-label'
                              htmlFor='checkRemember'
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-success bg-green col-4'
                      >
                        Login
                      </button>
                    </div>
                    <div className='container d-flex flex-column justify-content-center align-items-center my-2'>
                      <span className='pb-3'>
                        Don't have an Account,{" "}
                        <a href='/retail-user/' data-target='/retail-user/'>
                          Create One
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
