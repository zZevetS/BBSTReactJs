import '../../Home/home.css'
import style from '../../Pages.module.css'
import { Link } from 'react-router-dom'
function Element3(){
    return(
        <div className="element3">
        <div className={`${style.black_textBold} element3_title`}>TẠI SAO LẠI CHỌN CÔNG NGHỆ BBST ? </div>
        <div className="element3_box">
            <div className="element3_content">
                <div className="element3_content-child">
                    <div className="element3_icon">
                        <i className="fa-solid fa-thumbs-up"></i>
                    </div>
                    <p className={`${style.element3_para}`}> Phương pháp học bằng công nghệ bbst tập trung vào việc dạy ngữ pháp và từ vựng một cách có hệ thống</p>
                </div>
                <div className="element3_content-child">
                    <div className="element3_icon">
                        <i className="fa-regular fa-circle-check"></i>
                    </div>
                    <p className={`${style.element3_para}`}>Quá trình học tiết kiệm thời gian, dễ kiểm soát </p>
                </div>
                <div className="element3_content-child">
                    <div className="element3_icon">
                        <i className="fa-solid fa-book"></i>
                    </div>
                    <p className={`${style.element3_para}`}>Luyện tập đọc và viết giúp người học phát triển khả năng hiểu văn bản và diễn đạt ý tưởng một cách rõ ràng </p>
                </div>
            </div>
            <div className={style.center_btn}>
                <Link className={`${style.moreinfobtn}`} to={'/bbstTech'}>Xem Thêm</Link>
            </div>
        </div>
    </div>
    )
}

export default Element3