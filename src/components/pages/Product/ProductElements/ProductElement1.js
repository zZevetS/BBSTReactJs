import style from '../../Pages.module.css'
import '../../Product/product.css'
import Banner01 from '../../../asset/bannersp1.png'
import Banner02 from '../../../asset/bannersp2.png'

function Element1(){
    return (  
        <div>
            <div className="product_name_div1">
                <div className="product_hr_left"></div>
                <span className={style.product_name1}>BÍ QUYẾT HỌC TIẾNG ANH</span>
                <div className="product_hr_right"></div>
            </div>
            <div className="product_name_div2">
                <span className={style.product_name2} >ĐỊNH HƯỚNG IELTS BẰNG CÔNG NGHỆ BBST </span>
            </div>
            <div className="container"> 
                <div className="container_left1">
                    <div className={style.container_left_text1}>CẨM NANG NGỮ PHÁP TIẾNG ANH</div>    
                    <div className="container_left2"> 
                        <div className={style.container_left_text2}>Cuốn sách ngữ pháp tiếng Anh không chỉ là một công cụ học tập, mà là một chuyến hành trình kỳ thú vào thế giới của ngôn ngữ. Nó mở ra trước mắt người đọc một 
                            bức tranh rõ nét về cấu trúc và quy tắc của tiếng Anh, từ những quy tắc cơ bản cho đến 
                            những biến thể tinh tế aaaaa. </div>
                    </div>
                </div> 
                <div className="container_right">
                    <img src={Banner01} className="container_right_img1"/>
                    <img src={Banner02} className="container_right_img2"/>      
                </div>
             </div>
        </div>
    )
}
export default Element1