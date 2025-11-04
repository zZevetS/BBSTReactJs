import style from '../../Pages.module.css'
import '../../Product/product.css'
function ProductElement3(){
    const handleToggle = (e) => {
        e.preventDefault()
        const textContent = document.querySelector('.text-content')
        const button = e.target

        if (textContent.classList.contains('expanded')) 
        {
            textContent.classList.remove('expanded')
            button.textContent = 'Xem thêm'
        } 
        else 
        {
            textContent.classList.add('expanded')
            button.textContent = 'Thu gọn'
        }
    }
    return (
        <div>
           <div className={style.container_text}>
                <p>THÔNG TIN NỔI BẬT CỦA SÁCH</p>
                <div className="detail_line"></div>
            </div>
            <div className="text-content">
                <p className={style.description}>
                    Cuốn sách "Cẩm Nang Ngữ Pháp Tiếng Anh Siêu Tốc Cho Người Việt" để giúp học sinh cấp 2, cấp 3 và sinh viên mất gốc tiếng Anh luyện thi IELTS một cách hiệu quả với các bộ đề luyện thi IELTS nổi tiếng thế giới: Ielts Academic - Cambridge.
                    Để có thể luyện các bộ đề IELTS ACADEMIC - Cambridge một cách hiệu quả, chúng ta cần qua giai đoạn Pre-IELTS để có thể nắm vững hệ thống ngữ pháp, có một lượng từ, tập hợp từ khoảng 3.000, có khả năng nghe, nói, viết cơ bản khá tốt.
                    Tác giả Tiến sĩ Nguyễn Trọng Giao đã dành nhiều năm nghiên cứu và phát triển để mang đến cho người đọc một cẩm nang toàn diện, giúp họ không 
                    chỉ nắm vững các quy tắc ngữ pháp mà còn ứng dụng thành thạo trong giao tiếp và thi cử.
                    <br></br>
                    <br></br>
                    <span className={style.h2_text}>Đặc điểm nổi bật</span>
                    <br></br>
                    - Phương pháp BBST: Cuốn sách áp dụng công nghệ học tập tiên tiến BBST (Brain-Based Strategic Training), giúp người học tiếp thu ngữ pháp một cách hiệu quả và nhanh chóng. 
                    Chỉ sau một buổi lên lớp học viên đã có thể nắm được cách dùng 18 thì của động từ, từ đó dễ dàng nắm vững toàn bộ hệ thống ngữ pháp tiếng Anh, giúp nói, viết tự tin, chuẩn xác, xúc tích theo yêu cầu của IELTS và có thể học thuộc 1.000 từ, tập hợp từ chỉ trong một vài tuần.
                    <br></br>
                    - Định hướng IELTS: Học ngữ pháp theo nguyên lý Logic thời gian và Ngôn ngữ đối chiếu: Muốn sử dụng được một ngoại ngữ chúng ta cần nắm vững hệ thống ngữ pháp của ngoại ngữ đó và có một lượng từ, tập hợp từ đủ dùng. 
                    Với bảng Logic thời gian và nguyên lý Ngôn ngữ đối chiếu học viên dễ dàng biết cách sử dụng 18 thì của động từ, từ đó dễ dàng nắm vững toàn bộ hệ thống ngữ pháp tiếng Anh, giúp nói, viết tự tin, chuẩn xác, xúc tích trong phần kiểm tra nói, viết của IELTS.
                    <br></br> 
                    - Kết hợp nguyên lý Tần suất sử dụng cao với nguyên lý Logic thời gian và Ngôn ngữ đối chiếu giúp người học nhanh chóng sử dụng được tiếng Anh: Không ai có thể thuộc hết tất cả các từ, tập hợp từ và nắm được mọi vấn đề của một ngôn ngữ, những người ta đã chứng minh rằng:
                    Với tiếng Anh chỉ cần thuộc 1.000 từ và có kiến thức ngữ pháp cơ bản vững vàng đã có thể giao tiếp khá tốt với người nước ngoài, chi cần có vốn từ, tập hợp từ khoảng 3.000 và kiến thức ngữ pháp tốt, đã có thể đọc báo chi ở mức độ trung bình khó.
                    <br></br>
                    - Song ngữ Tiếng Anh + Tiếng Việt: Sách được viết bằng cả tiếng Anh và tiếng Việt, giúp người học dễ dàng tiếp cận nội dung và hiểu sâu hơn về cách sử dụng ngữ pháp 
                    trong ngữ cảnh thực tế. Điều này đặc biệt hữu ích cho những ai đang gặp khó khăn với tiếng Anh.
                    <br></br>
                    - Nội dung phong phú và chi tiết: Với 500 trang, cuốn sách cung cấp một lượng lớn bài học từ cơ bản đến nâng cao. Các chương được sắp xếp logic, giúp người học tiến bộ theo 
                    từng bước từ những khái niệm cơ bản đến những cấu trúc ngữ pháp phức tạp hơn.
                    <br></br>
                    - Bài tập thực hành đa dạng: Sách cung cấp một loạt bài tập thực hành từ dễ đến khó, kèm theo các bài kiểm tra ngắn để người học có thể tự đánh giá mức độ tiến bộ của mình. 
                    Các bài tập được thiết kế để ứng dụng ngay vào giao tiếp hàng ngày và thi cử.
                    <br></br>
                    - Phù hợp với người Việt: Cuốn sách được biên soạn với sự chú ý đặc biệt đến những khó khăn và thách thức mà người học tiếng Anh tại Việt Nam thường gặp phải. 
                    Các ví dụ và bài tập trong sách được thiết kế để phù hợp với văn hóa và ngữ cảnh Việt Nam, giúp người học dễ dàng liên tưởng và áp dụng vào thực tế.
                    <br></br>
                    <br></br>
                    <span className={style.h2_text}>Lời kết</span>
                    <br></br>
                    "Cẩm Nang Ngữ Pháp Tiếng Anh Siêu Tốc Cho Người Việt" không chỉ là một cuốn sách giáo khoa thông thường, mà là một người bạn đồng hành đáng tin cậy trên hành trình chinh phục tiếng Anh của bạn. Dù bạn là người mới bắt đầu hay đang chuẩn bị 
                    cho kỳ thi IELTS, cuốn sách này sẽ là công cụ đắc lực giúp bạn đạt được mục tiêu của mình.
                </p>
            </div>   
            <a
                className="Lexend_bold"
                id="toggle-button"
                style={{ fontSize: 18 }}
                onClick={handleToggle}
            >
                Xem thêm
            </a>
        </div>
        
    )
}

export default ProductElement3