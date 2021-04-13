import logo from '.././images/logo.svg';
import ham_logo from '../images/iconmonstr-menu-1.svg';
const Header = () => {
  function myfunction() {
    let x = document.querySelectorAll('.change');
    if (
      x[0].classList.contains('ham_menu') &&
      x[1].classList.contains('ham_menu')
    ) {
      x[0].classList.remove('ham_menu');
      x[1].classList.remove('ham_menu');
    } else {
      x[0].classList.add('ham_menu');
      x[1].classList.add('ham_menu');
    }
  }

  return (
    <header>
      <div className="navbar">
        <div className="temp">
          <div>
            <img src={logo} alt="Shortly"></img>
            <a href="/#" className="ham_icon" onClick={() => myfunction()}>
              <img src={ham_logo} alt="ham_logo" />
            </a>
          </div>
          <div className="change">
            <ul className="ul_style">
              <li>
                <a className="a how_black" href="/#">
                  Features
                </a>
              </li>
              <li>
                <a className="a how_black" href="/#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="a how_black" href="/#">
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="change top_increase">
          <a href="/#" className="btn nav">
            Login
          </a>
          <a href="/#" className="btn nav">
            SignUp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
