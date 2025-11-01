import style from '../../Pages.module.css'
import '../../Product/product.css'
import HinhSP from '../../../asset/hinhsp.png'
import { Link } from 'react-router-dom'

function ProductElement2(){
    return(
        <div>
            <div className="container"> 
                <div className="container_left_book">
                    <img src={HinhSP} className="container_left_imgbook"/>   
                </div> 
                <div className="container_right_book1">
                    <div className="container_rightt">
                        <span className={style.container_right_booktext1}>THÔNG TIN SÁCH</span>  
                    <div className="container_right_book2"> 
                        <span className={style.container_right_booktext2}>
                            <span className="container_right_booktext3">Tác giả:</span> Tiến sĩ Nguyễn Trọng Giao 
                        </span> 
                    </div>
                    <div className="container_right_book3">
                        <span className={style.container_right_booktext2}>
                            <span className="container_right_booktext3">Nhà xuất bản: </span> Anbooks
                        </span> 
                    </div>
                    <div className="container_right_book3">
                        <span className={style.container_right_booktext2}>
                            <span className="container_right_booktext3">Năm xuất bản: </span>  2024
                        </span> 
                    </div>
                    <div className="container_right_book3">
                        <span className={style.container_right_booktext2}>
                            <span className="container_right_booktext3">Ngôn ngữ: </span>  Tiếng Anh + Tiếng Việt
                        </span> 
                    </div>
                    <div className="container_right_book3">
                        <span className={style.container_right_booktext2}>
                            <span className="container_right_booktext3">Số trang: </span>  500 trang
                        </span>
                    </div>   
                    <div className="container_right_book3">
                        <span className={style.container_right_booktext2}>
                            <span className="container_right_booktext3">Quyển: </span>  Tập 1
                        </span> 
                    </div> 
                    </div>
                    <div className="center_btn">
                        <a className={`${style.moreinfobtn}`} rel="stylesheet" href=""><span>MUA NGAY</span> </a>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default ProductElement2