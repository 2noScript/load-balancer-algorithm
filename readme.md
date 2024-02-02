# Load Balancer Algorithms

## 1. Round Robin

- **Mô tả:** Chia lưu lượng truy cập theo chu kỳ giữa các máy chủ theo thứ tự.
- **Ưu điểm:** Đơn giản, dễ triển khai, phù hợp cho môi trường có nhiều máy chủ cùng cấu hình.
- **Nhược điểm:** Không xem xét trạng thái của máy chủ, có thể gây ra tình trạng quá tải nếu máy chủ không còn khả dụng.

## 2. Least Connections (Least Connections First)

- **Mô tả:** Chọn máy chủ với ít kết nối kích hoạt nhất.
- **Ưu điểm:** Phân phối tải dựa trên tình trạng thực tế của máy chủ.
- **Nhược điểm:** Yêu cầu theo dõi trạng thái kết nối của từng máy chủ.

## 3. IP Hash

- **Mô tả:** Dựa vào địa chỉ IP của người dùng để xác định máy chủ nơi yêu cầu sẽ được chuyển tiếp đến.
- **Ưu điểm:** Giúp duy trì phiên làm việc liên quan với cùng một máy chủ.
- **Nhược điểm:** Không hiệu quả khi có sự không đồng đều trong phân phối địa chỉ IP.

## 4. Weighted Round Robin

- **Mô tả:** Tương tự như Round Robin, nhưng mỗi máy chủ có một "trọng số" xác định số lượt chuyển tiếp mà nó nhận được so với các máy chủ khác.
- **Ưu điểm:** Cân bằng tải dựa trên khả năng xử lý của từng máy chủ.
- **Nhược điểm:** Cần đánh giá và thiết lập trọng số một cách chính xác.

## 5. Weighted Least Connections

- **Mô tả:** Tương tự như Least Connections, nhưng với trọng số.
- **Ưu điểm:** Cân bằng tải dựa trên khả năng xử lý của từng máy chủ.
- **Nhược điểm:** Cần đánh giá và thiết lập trọng số một cách chính xác.

## 6. Random

- **Mô tả:** Chọn ngẫu nhiên một máy chủ từ danh sách.
- **Ưu điểm:** Đơn giản và không cần quản lý trạng thái máy chủ.
- **Nhược điểm:** Không đảm bảo cân bằng tải lý tưởng trong mọi trường hợp.
