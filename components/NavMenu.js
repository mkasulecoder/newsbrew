import Link from "next/link";
import Image from "next/image";
import { CgDarkMode } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <div className='navbar-brand'>
            <Link href='/'>
              <Image
                src='/logo-no-bg.png'
                alt='News Brew Logo'
                width={150}
                height={50}
              />
            </Link>
          </div>
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
              <CgDarkMode
                id='reading-mode'
                size={30}
                role='button'
                aria-label='Toggle dark mode'
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
