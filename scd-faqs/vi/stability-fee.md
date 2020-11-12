# Phí Ổn định

## Phí Ổn định là gì?

Các hợp đồng thông minh Maker sẽ thu một khoản phí ổn định được tính dựa trên tổng số DAI rút ra so với tài sản thế chấp được giữ trong CDP. Đây là chi phí biến đổi có thể thay đổi khi chủ sở hữu MKR bỏ phiếu cho các đề xuất do Nhóm Giải quyết Rủi ro đưa ra tại MakerDAO.

## Khi nào tôi phải trả Phí Ổn định?

Khi bạn hoàn trả DAI cho CDP để trả nợ, bạn sẽ phải trả thêm một khoản phí tương đương với số tiền DAI được trả lại. Phí này có thể thanh toán bằng token MKR hoặc bằng Dai.

## Tôi có phải trả các khoản phí mới cho khoản nợ cũ không?

Không. Phí Ổn định không bao giờ được áp dụng hồi tố. Sau khi thay đổi phí, người dùng sẽ tích lũy phí ổn định theo mức phí mới kể từ thời điểm đó, giống như lãi suất thay đổi trên một khoản vay.

## Mục đích của Phí Ổn định là gì?

Phí Ổn định là thông số rủi ro được thiết kế để giải quyết sự mất cân đối trong cung và cầu của token Dai, điều mà sẽ có thể gây ra các giai đoạn tăng trưởng thấp hoặc tăng trưởng bị âm trong thị trường tiền điện tử.
Cơ chế đằng sau mức phí này khá là đơn giản; khi nhu cầu thị trường của Dai giảm, các khoản phí liên quan đến việc tạo Dai mới sẽ tăng lên, và điều ngược lại sẽ xảy ra khi nhu cầu thị trường của Dai tăng. Việc tái cân bằng này làm thay đổi các ưu đãi dành cho chủ sở hữu CDP khi tạo hoặc sử dụng Dai và có thể có tác dụng ổn định trên soft-peg.

## Tại sao Phí Ổn định thay đổi?

Khi phát hiện Dai liên tục giao dịch trên hoặc dưới mức giá mục tiêu 1 đô la, thì đó có thể chính là dấu hiệu báo động việc mất cân bằng giữa cung và cầu vĩ mô của Dai. Phí Ổn định là mức phí ảnh hưởng chủ yếu đến nguồn cung Dai vì nó làm thay đổi chi phí tạo ra Dai. Phí mượn Dai càng rẻ, thì người dùng càng được khuyến khích mượn. Ngược lại, khi phí mượn cao hơn, thì sẽ có ít người dùng muốn mượn Dai hơn. Chủ sở hữu token MKR có thể đặt mức giá này để duy trì peg.
Nếu Dai giao dịch ổn định trên 1 đô la, nghĩa là cầu đang vượt xa cung và những người tham gia thị trường sẵn sàng trả tiền để mua Dai. Nếu việc này diễn ra quá thường xuyên, nghĩa là nó đang báo động cần phải giảm Phí Ổn định để khuyến khích tạo thêm Dai.
Nếu Dai giao dịch ổn định dưới 1 đô la, nghĩa là cung đang vượt xa cầu và Dai đang bị quá tải trong thị trường. Nếu việc này diễn ra quá thường xuyên, nghĩa là nó đang báo động Phí Ổn định cần phải được tăng lên để làm chậm quá trình tạo thêm Dai.
Thật không may, chúng ta không thể dự đoán chính xác các tác động làm thay đổi mức phí trước khi thực hiện giao dịch, vì kết quả hoàn toàn phụ thuộc vào phản ứng của thị trường. Phải qua một thời gian sau, mới có nhiều dữ liệu hơn để hỗ trợ cho mô hình dự đoán hoặc thậm chí là một mô hình phản ứng mạnh mẽ hơn để hỗ trợ cho việc điều chỉnh Phí Ổn định.

## Phí Ổn định được tính như thế nào?

Phí Ổn định được tính _liên tục_. Nó có mệnh giá tương đương với Dai và có thể được thanh toán bằng DAI hoặc MKR. Như được thể hiện ở các công thức dưới đây, loại lãi kép này là một hình thức tích lũy lãi nhỏ thay vì tích lũy theo tuần, theo tháng hoặc theo năm. Nó tạo ra một khoản phí gần bằng với mức lãi năm mà mọi người mong muốn. Hình thức này được mọi người chọn bởi vì tuổi thọ của CDP của nó rất cao. Vì thời gian duy trì chế độ mở của một CDP là không giới hạn , nên việc hệ thống phải theo dõi các khoản tích lũy nhỏ một cách hiệu quả là cực kỳ quan trọng.
Chúng ta hãy cùng xem kết quả từ việc áp dụng các loại lãi kép khác nhau, với khoản nợ 100.000 DAI giữ trong 365 ngày.

### Công thức

Khi:

**A** = Lãi

**P** = số tiền đầu tư ban đầu (số tiền gửi hoặc vay ban đầu)

**r** = lãi suất hàng năm (số thập phân)

**n** = số lần lãi được gộp mỗi năm

**t** = số năm mà tiền được đầu tư hoặc được vay

**e** = [hằng số Euler](<https://vi.wikipedia.org/wiki/E_(s%E1%BB%91)>)

- **P** \(1 + r/n\)^nt - P = A: Lãi kép hàng năm
- **P** \(1 + r/n\)^nt - P = A: Lãi kép hàng tháng
- **P** \(e\)^rt - P = A: Lãi kép liên tục

### Đơn giản hơn:

Tính theo lãi kép hàng năm, Phí Ổn định trong tương lai sẽ là:

```text
100,000 × (1 + (12.5% / 1)) ^ (1 × 1) - 100,000 = 12,500 DAI
```

Tính theo lãi kép hàng tháng, Phí Ổn định trong tương lai sẽ là:

```text
100,000 × (1 + (12.5% / 12)) ^  (12 × 1)  - 100,000 = 13,241.60 DAI
```

Tính theo lãi kép liên tục, Phí Ổn định trong tương lai sẽ là:

```text
100,000 × 2.7183... ^ (12.5% × 1) - 100,000 = 13,314.94 DAI
```

Mức chênh lệch giữa lãi kép hàng năm và lãi kép liên tục trên khoản nợ 100.000 DAI, ở mức 12,5% APY, là khoảng 814,94 DAI. Chúng ta hãy xem thêm một vài ví dụ về cách tính Phí Ổn định trong thực tế.

### Một Ví dụ Đơn giản

Giả thiết:

- CDP đang có khoản nợ **1000** **DAI**
- CDP đã mở trong **30** **ngày**
- Giá trị hiện tại của token MKR là **1000** **DAI**
- Phí Ổn định là **5%**
- hMột người dùng trả lại một phần nợ với số tiền **50** **DAI**

Tổng chi phí Dai phải trả lại cho **50 DAI** trên khoản nợ **1000 DAI** đã có **30 ngày** tuổi là **0.208 DAI**, tương đương khoảng 21 cent USD.

Khoản nợ có mệnh giá Dai phải được chuyển đổi thành MKR để thanh toán. Chủ sở hữu CDP nợ 0,00021 MKR.

### Một Ví dụ Chi tiết

Tổng Phí Ổn định tích lũy trong CDP có thể được tính như sau:

> \(\(\(DAI đã vay \* \(1 + Phí Ổn định hiện tại ở dạng thập phân\)\) ^ \(Tuổi nợ tính bằng ngày/365\)\) - DAI đã vay\) = Tổng Phí Ổn định nợ bằng DAI

Khi chúng ta cho các giá trị mà mình đã sử dụng trên kia vào, chúng ta sẽ thấy các khoản nợ bằng DAI như sau:

```text
(1000 * (1 + 0.05) ^ (30÷365)) - 1000 = 4.018 DAI
```

Bây giờ chúng ta có tổng chi phí bằng DAI rồi, chúng ta có thể chuyển đổi nó thành MKR. Giả sử tỷ giá hối đoái của 1 MKR là 1000 DAI:

```text
4.018 ÷ 1000 = 0.004018 MKR
```

Và, vì người dùng đang phải hoàn trả 50 DAI, nên họ sẽ phải trả khoản phí tích lũy dựa trên số tiền đó:

```text
(50 * (1 + 0.05) ^ (30÷365)) - 50 = 0.2009 DAI
```

Bây giờ chuyển đổi sang MKR, sẽ là:

```text
0.2009 ÷ 1000 = 0.0002009 MKR
```

Người dùng sẽ cần phải có **0.0002009 MKR** trong ví của họ để trả phí tích lũy cho **50 DAI** sau **30 ngày**.

Sau khi hoàn thành giao dịch, tổng số phí còn lại trong CDP sẽ là:

0.004018 - 0.0002009 = **0.0038171 MKR**

## Hệ thống làm gì với các khoản phí thu được?

Khi các khoản phí được thu về, hợp đồng thông minh sẽ chuyển MKR sang một hợp đồng có tên là [Burner](https://etherscan.io/address/0x69076e44a9c70a67d5b79d95795aba299083c275).

Trước khi các MKR trong ví burner được phá hủy thực sự, thì tất cả chúng đều không được lưu hành, vì không ai có thể xóa tiền khỏi địa chỉ đó.

## Tôi có thể xem Phí Ổn định hiện tại của mình ở đâu?

[Bảng điều khiển CDP cũ](https://dai.makerdao.com/): Số dư chưa thanh toán còn nợ trên CDP được hiển thị trong cột "Quản trị nợ” trên bảng điều khiển DAI.

[Cổng thông tin CDP mới](https://cdp.makerdao.com/): Số dư chưa thanh toán trên CDP được hiển thị ở bảng bên phải và xuất hiện khi bạn nhấp vào "Hoàn vốn"

Ngoài ra còn có một số công cụ của bên thứ ba có thể được tìm thấy trong phần [Xem Dai của bạn](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#watch-your-dai) trong kho lưu trữ Awesome-MakerDAO.

## Các khoản phí thay đổi cung và cầu như thế nào?

Việc tăng Phí Ổn định dẫn đến chi phí vay của người dùng CDP tăng cao, do đó muốn giảm nguồn cung Dai thì phải giảm sức hấp dẫn của việc sử dụng CDP xuống. Ngược lại, việc giảm Phí Ổn định (chi phí đi vay) sẽ khuyến khích việc tạo thêm Dai, đây chính là công cụ đóng vai trò điều chỉnh tăng trưởng nguồn cung.

## Làm cách nào để tôi tính được tác động của việc thay đổi Phí Ổn định?

Bạn có thể sử dụng công thức đơn giản hóa này để xác định Phí Ổn định tích lũy:

> \(\(DAI đã vay \* \(1 + Phí Ổn định hiện tại ở dạng thập phân\)\) ^ \(Tuổi nợ tính theo ngày/365\)\) - DAI đã vay\) = Tổng Nợ ổn định nợ trong DAI

Mức phí cho khoản nợ 10.000 DAI trong suốt 31 ngày ở mức 5,0%:

```text
(10000 x (2.7183...) ^ (5.0%*(31/365)) - 10000 = 42.474 DAI
```

Và ở mức 10.0%

```text
(10000 x (2.7183...) ^ (10.0%*(31/365)) - 10000 = 85.2937 DAI
```

## Tôi có thể tìm hiểu thêm về Nhóm Giải quyết Rủi ro và liên lạc với Maker Foundation về các thay đổi hiện tại hoặc tương lai trên với hệ thống như thế nào?

Vui lòng cân nhắc việc tham gia các cuộc họp [Governance and Risk](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles) diễn ra hàng tuần của chúng tôi, nơi chúng tôi thảo luận về các vấn đề một cách chi tiết hơn. Chương trình cuộc họp được cập nhật thường xuyên trên mục [r/MakerDAO](https://www.reddit.com/r/MakerDAO/). Ngoài ra, hãy xem phần [Governance section](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#governance) trong mục Awesome-MakerDAO.

## Có giới hạn về phạm vi thay đổi Phí Ổn định hay không?

Nhóm Giải quyết Rủi ro sẽ đề xuất các ngưỡng thay đổi Phí Ổn định (mức phí thay đổi theo thời gian, độ lệch của peg, số lần lấy mẫu) và sẽ thuyết trình trước các Maker để bỏ phiếu phê duyệt.

## Làm sao để các chủ sở hữu CDP có thể giảm thiểu rủi ro về việc phí thay đổi?

Sau đây là một vài lựa chọn mà người dùng có thể sẽ muốn tìm hiểu để tránh được các khoản phí.

Nhu cầu MKR tương quan tích cực với việc tăng Phí Ổn định. Nếu mối quan hệ này vẫn duy trì bền vững, thì những người tham gia CDP có thể sẽ giảm được rủ ro thay đổi Phí Ổn định bằng cách giữ MKR.

Những người dùng tìm kiếm các khoản vay có kỳ hạn và lãi suất cố định có thể sẽ tránh được rủi ro thay đổi phí trong tương lai bằng cách tìm một đối tác sẵn sàng cho vay có kỳ hạn cố định trên các nền tảng cho vay khác.

Tuy nhiên, chiến lược quản lý rủi ro tốt nhất vẫn là tham gia vào quy trình quản trị và đảm bảo rằng phiếu bầu của bạn được tính khi các đề xuất được phê chuẩn.

## Chuyện gì xảy ra nếu cuộc bỏ phiếu thay đổi phí bị từ chối?

Nếu cuộc bỏ phiếu bị thất bại, có thể sẽ làm cho giá Dai bị rớt xuống nếu tiếp tục mất cân đối ở hiện tại. Nếu vẫn diễn ra , thì lựa chọn duy nhất còn lại cho nền tảng chỉ có thể là kích hoạt tắt máy khẩn cấp để đảm bảo an ninh kinh tế cho những người sở hữu Dai.

Cơ chế bỏ phiếu là cơ chế chủ yếu để cộng đồng quản lý peg, thông qua việc tinh chỉnh các công cụ chính sách. Ở đây sẽ không có "cửa sau", nên sẽ không ai có thể đơn phương thay đổi thông số rủi ro trong hệ thống.

## Phí Ổn định sẽ thay đổi với tần suất như thế nào?

Không thể lên lịch hoặc dự đoán về thời điểm phí sẽ thay đổi hoặc mức giá mới có thể là bao nhiêu.

Nhóm giải quyết rủi ro sẽ liên tục theo dõi kết quả của các thay đổi trước đó và sẽ đề xuất các điều chỉnh tương tự hoặc khác nhau khi cần thiết. Thật khó để nói thị trường sẽ phản ứng nhanh như thế nào và đáng kể như thế nào, vì vậy, nhóm giải quyết rủi ro sẽ tiếp cận điều chỉnh trực tiếp cho từng trường hợp cụ thể.

Do thao túng rủi ro, nên sẽ luôn cần có một số mức độ tùy ý và xử lý tín hiệu cần thiết để xác định chính xác cách điều chỉnh Phí Ổn định. Các quy trình hoàn toàn tự động và thuật toán đều dễ dàng để thao tác và sẽ cần được xem xét cẩn thận.
