import Link from "next/link";
import Image from "next/image";
import { BiBuildingHouse } from "react-icons/bi";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-aqua'>
        <div className='container-fluid'>
          <Link href='/' className='navbar-brand'>
            <Image
              src='/logo-no-bg.png'
              width={150}
              height={60}
              alt='News Brew Logo'
            />
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
