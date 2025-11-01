import './header.css'
import style from '../Pages.module.css'
import {Link} from 'react-router-dom';
import logo from '../../asset/logomain.png';
function Header() {
  return (
   <div className='container_header'>
     <nav className={`header ${style.deep_blue}` }>
            <Link className={`${style.link_decorate}`} to={"/"}>Trang Chủ</Link>
            <Link className={`${style.link_decorate}`} to={"/product"}>Sản Phẩm</Link>
            <Link to={"/"}>
                <img className={`${style.logo_main_header}`} src={logo} alt="logobrand"/>
            </Link>
            <Link className={`header_list ${style.link_decorate}`} to={"/bbstTech"}>Công Nghệ BBST</Link>
            <Link className={`header_list ${style.link_decorate}`} to={"/author"}>Tác Giả</Link>
    </nav>
   </div>
  );
}

export default Header;
