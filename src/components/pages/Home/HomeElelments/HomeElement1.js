import Banner01 from '../../../asset/banner01.png'
import productImg from '../../../asset/hinhsp.png'
import '../../Home/home.css'
import style from '../../Pages.module.css'
import { Link } from 'react-router-dom'

function Element1(){
    return(
       <div>
            <div>
                <img className="banner" src={Banner01} alt="banner01"/>
            </div>
            <div className="element1 wow bounceInLeft">
                <div className={`element1_title ${style.black_textBold}`}>Sách Nhà ESPEEDING</div>
            </div>
            <div className="element1_product ">
                <div className="element1_card">
                    <div className={style.element1_card_item1}>
                        <p className={style.element1_para}>Bạn đang gặp khó khăn về ngữ pháp và cách học tiếng Anh ? Chúng tôi sẽ giúp bạn vượt qua khó khăn này thông qua cuốn sách này nhé !</p>
                        <div className="center_btn">
                            <Link className={`${style.moreinfobtn}`} to={'/product'}>Xem Thêm</Link>
                        </div>
                    </div>
                    <div className="element1_card_item2">
                        <img className="element1_item-img" src={productImg} alt="sach01"/>
                        <h4 className="element1_item-title Lexend_bold">CẨM NANG NGỮ PHÁP TIẾNG ANH</h4>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Element1