import Thay02 from '../../../asset/thay02.png'
import '../../Home/home.css'
import style from '../../Pages.module.css'
import { Link } from 'react-router-dom'


function Element2(){
    return(
    <div className="element2">
        <div>
            <img className="element2_img"src={Thay02} alt=""/>
            {/* <img className="element2_img_mobile" src="/images/thaygiao_mobilehome.jpg" alt=""/> Mobile */}
        </div>
        <div className="element2_box">
            <div className={`${style.black_textBold} element2_title`}>TÁC GIẢ</div>
            <div className="element2_text Lexend_regular">TIẾN SĨ NGUYỄN TRỌNG GIAO</div>
            <div className="element2_para Lexend_light">Người nghiên cứu, sáng lập bí quyết học tiếng Anh định hướng IELTS bằng công nghệ BBST</div>
            <div className='element2_moreinfobtn'>
                <Link className={`${style.moreinfobtn}`} to={'/author'}>Xem Thêm</Link>
            </div>
        </div>
    </div> 
    )
}

export default Element2