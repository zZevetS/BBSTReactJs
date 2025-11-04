import './footer.css'
import style from '../Pages.module.css'
import {Link} from 'react-router-dom';
import logo from '../../asset/logomain.png';
import anbookLogo from '../../asset/anbookslogo.png'

function Footer() {
  return (
   <footer className={`${style.deep_blue} container_footer`}>
      <div className="footer">
          <div className="footer_left">
                  <div className={`${style.footer_listitem_logo_container}`}>
                      <img className={style.footer_listitem_logo} src={logo} alt=""/>
                  </div>
                  <div>
                      <p className={`${style.footer_para}`}>Tìm kiếm cảm hứng từ những câu chuyện, tác phẩm văn học bằng tiếng <br/> 
                          Anh, giúp bạn trau dồi vốn từ và nâng cao khả năng đọc hiểu.</p>
                  </div> 
            </div>
            <div className="footer_spit"></div>
            <div className="footer_right">
               <div className={`${style.footer_list}`}>Về Chúng Tôi
                    <div className={`${style.footer_listitem}`}>
                        <Link className={`${style.footer_listitem} ${style.link_decorate}`} to={'/author'}>Tác Giả</Link>
                    </div>
                    <div className={`${style.footer_listitem}`}>
                        <Link className={`${style.footer_listitem} ${style.link_decorate}`} to={'/product'}>Sản Phẩm</Link>
                    </div>
                    <div className={`${style.footer_listitem}`}>
                        <Link className={`${style.footer_listitem} ${style.link_decorate}`} to={'/bbstTech'}>Công Nghệ BBST</Link>
                    </div>
                </div>
                <div className={`${style.footer_list}`}>Đối Tác Sản Xuất
                    <div className={`${style.footer_listitem}`}>
                        <a href="https://anbooks.vn/">
                            <img className="footer_listitem_logo" src={anbookLogo} alt="logo"/>
                        </a>
                        <a href="https://anbooks.vn/" className={style.footer_listitem_logo_mobile}>
                            Công ty TNHH Anbooks
                        </a>
                    </div>
                </div>
                <div className={`${style.footer_list}`}>Liên Hệ
                    <div className={`${style.footer_listitem}`}>
                        <div style={{margin_top: 18}}>
                            <a style={{margin_top: 50}} href="">
                                <i style={{color: 'white'}} className="fa-brands fa-facebook"></i>
                            </a>
                        </div>
                        <div>
                            <p className={`${style.footer_listitem}`}>SĐT: 0919.322.107</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
   </footer>
  );
}

export default Footer;