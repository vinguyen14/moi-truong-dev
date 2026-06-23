// CẤU HÌNH HỆ THỐNG DÀNH CHO ADMIN
const APP_CONFIG = {
    API_URL: "https://script.google.com/macros/s/AKfycbw052v1ip6sM-JUyZ5AHSjI5m2jJiEoDd1yma_xBqm5xQWMXaP6e_eamhdZaoxbn2E/exec", 
    COURSE_NAME: "26KV15" 
};

const CODELAB_DATA = [
  {
    id: "session_1",
    title: "Buổi 1: Tổng quan các bước làm quen phần mềm",
    exercises: [
      { title: "Bài tập 1: Đăng ký gian hàng dùng thử" /* ... các nội dung khác ... */ },
      { title: "Bài tập 2: Thêm mới hàng hóa" /* ... */ },
      { title: "Bài tập 3: Nhập hàng và ghi nhận công nợ" /* ... */ },
      { title: "Bài tập 4: Bán hàng và thanh toán kết hợp" /* ... */ },
      { title: "Bài tập 5: Trả hàng và thu phí dịch vụ" /* ... */ },
      { title: "Bài tập 6: Quản lý công nợ nhà cung cấp" /* ... */ },
      { title: "Bài tập 7: Theo dõi báo cáo" /* ... */ },
      { title: "Bài tập 8: Kinh nghiệm tư vấn (Demo cho khách hàng)" /* ... */ }
    ]
  },
  {
    id: "session_2",
    title: "Buổi 2: Các câu hỏi thường gặp",
    exercises: [
      { title: "Bài tập 1: Thêm mới sản phẩm ngay trên màn hình bán hàng" /* ... */ },
      { title: "Bài tập 2: Tra cứu thông tin và vị trí sản phẩm" /* ... */ },
      { title: "Bài tập 3: Tìm kiếm theo nhóm hàng và hiển thị tồn kho" /* ... */ },
      { title: "Bài tập 4: Lập phiếu thu công nợ khách hàng" /* ... */ },
      { title: "Bài tập 5: Thiết lập giới hạn thời gian trả hàng" /* ... */ },
      { title: "Bài tập 6: Trả hàng nhanh không cần hóa đơn" /* ... */ },
      { title: "Bài tập 7: Thiết lập bán hàng Offline khi mất mạng" /* ... */ },
      { title: "Bài tập 8: Thêm mới hàng hóa dịch vụ và tạo dữ liệu nháp" /* ... */ },
      { title: "Bài tập 9: Thiết lập bảng giá theo công thức" /* ... */ },
      { title: "Bài tập 10: Chỉnh sửa giá sỉ riêng lẻ cho sản phẩm đặc biệt" /* ... */ },
      { title: "Bài tập 11: Tạo phiếu kiểm kho cập nhật số lượng thực tế" /* ... */ },
      { title: "Bài tập 12: Thêm mới sản phẩm trực tiếp trên phiếu nhập hàng" /* ... */ },
      { title: "Bài tập 13: Thiết lập tính giá vốn trung bình" /* ... */ },
      { title: "Bài tập 14: Nhập hàng nhiều mức giá (Sử dụng tính năng thêm dòng)" /* ... */ },
      { title: "Bài tập 15: Kiểm tra sự biến động của giá vốn trung bình" /* ... */ },
      { title: "Bài tập 16: Thay đổi giá bán ngay khi nhập hàng" /* ... */ },
      { title: "Bài tập 17: Tạo và tự động hóa nhóm khách hàng VIP" /* ... */ },
      { title: "Bài tập 18: Lập phiếu chi và theo dõi sổ quỹ" /* ... */ },
      { title: "Bài tập 19: Thiết lập tài khoản ngân hàng" /* ... */ },
      { title: "Bài tập 20: Phân quyền tài khoản nhân viên thu ngân" /* ... */ },
      { title: "Bài tập 21: Import hàng hóa từ file Excel" /* ... */ }
    ]
  },
  {
    id: "session_3",
    title: "Buổi 3: Mobile App & Quản lý thiết bị phần cứng",
    exercises: [
      { title: '📱 Thao tác trên Mobile App', isGroupHeader: true },
      { title: "Bài tập 1: Thêm mới hàng hóa và thiết lập đơn vị tính quy đổi" /* ... */ },
      { title: "Bài tập 2: Tạo phiếu nhập hàng từ nhà cung cấp" /* ... */ },
      { title: "Bài tập 3: Thực hiện giao dịch bán hàng và thanh toán" /* ... */ },
      { title: "Bài tập 4: Xử lý khách trả hàng" /* ... */ },
      { title: "Bài tập 5: Thanh toán công nợ cho nhà cung cấp" /* ... */ },
      { title: "Bài tập 6: Xóa vĩnh viễn dữ liệu nháp" /* ... */ },
      { title: '⚙️ Cài đặt thiết bị phần cứng', isGroupHeader: true },
      { title: "Bài tập 1: Cài đặt và làm quen KiotViet Hardware Manager" /* ... */ },
      { title: "Bài tập 2: Cài đặt máy in hóa đơn & thiết lập ngăn kéo đựng tiền" /* ... */ },
      { title: "Bài tập 3: Cài đặt máy in tem mã & thiết lập khổ giấy" /* ... */ },
      { title: "Bài tập 4: Thao tác kết nối màn hình QR" /* ... */ }
    ]
  }
];

// --- PHẦN DƯỚI NÀY LÀ NỘI DUNG CHI TIẾT, BẠN GIỮ NGUYÊN ---
// Tôi sẽ chỉ hiển thị tiêu đề đã sửa, bạn hãy giữ lại phần nội dung chi tiết (theory, requirements...) của file cũ nhé.
CODELAB_DATA.forEach(session => {
    session.exercises.forEach(ex => {
        // Tự động điền lại nội dung chi tiết từ file cũ của bạn
        // ...
    });
});
