# Vị trí Nợ Thế chấp

## Vị trí Nợ Thế chấp là gì?

Vị trí Nợ Thế chấp của MakerDAO (CDP) là một khoản cho vay được quản lý bởi một hệ thống hợp đồng thông minh chạy trên blockchain Ethereum. CDP là một thành tố chính trong hệ thống Dai Stablecoin, hỗ trợ tạo ra đồng Dai bằng việc giữ lại các tài sản thế chấp của người dùng cho đến khi Dai được hoàn trả lại.

Việc sử dụng CDP sẽ làm thay đổi tổng nguồn cung của Dai. Người dùng tạo ra Dai bằng cách thế chấp tài sản của mình và phá hủy Dai khi họ trả hết nợ. Quá trình này diễn ra trên chuỗi chain và nó cho phép kiểm tra tất cả số lượng Dai đang được lưu hành và các tài sản thế chấp khác.

CDP yêu cầu phải vượt mức tài sản thế chấp. Giá trị của tài sản thế chấp trong CDP yêu cầu phải cao hơn số tiền nợ để đàm bảo cho người dùng Dai rằng Dai của họ luôn có giá trị và được hỗ trợ đầy đủ bằng tài sản thật.

## CDP hoạt động như thế nào?

Bất kỳ người dùng nào muốn tạo Dai đều có thể gửi ETH vào CDP. Sau khi ký quỹ, người dùng có thể tạo Dai dựa trên giá trị tiền gửi của họ. Miễn là chủ sở hữu CDP duy trì [Tỷ lệ thế chấp](#what-is-the-collateralization-ratio) tối thiểu , họ có thể tự do rút tiền hoặc ký gửi tài sản thế chấp.

Sau khi tạo Dai, người dùng CDP có thể làm bất cứ điều gì họ muốn. Nếu người dùng muốn lấy lại toàn bộ số tiền ký quỹ của mình, thì họ cần phải hoàn trả lại toàn bộ số tiền Đại trước.

Chu kỳ cho vay / trả nợ và nạp thêm / xóa tài sản thế chấp sẽ được tiếp diễn nếu chủ sở hữu luôn dặt CDP ở chế độ mở. Người dùng có thể đóng CDP của mình bằng cách thanh toán đầy đủ các khoản nợ và các khoản phí liên quan.

## Ai có thể mở CDP?

Không cần thiết phải xin phép khi mở CDP; bất cứ ai cũng có thể tạo và sử dụng nó. Không yêu cầu các giấy tờ liên quan đến lịch sử vay hoặc quy trình nộp đơn rườm rà. Hệ thống không được kiểm soát bởi bất kỳ ai hoặc bất kỳ trung gian nào. Các Maker CDP được tạo và sở hữu bởi các tài khoản Ethereum, và có thể được tự do chuyển nhượng giữa các ví tiền.

## CDP có phải chịu bất kỳ khoản phí nào không?

Có. Chủ sở hữu CDP được yêu cầu phải trả một khoản phí ổn định cho khoản nợ chưa thanh toán của họ. Đó là [Lãi kép liên tục của APY](https://vi.routestofinance.com/annual-percentage-yield).

Nếu CDP chuyển sang tình trạng không được thế chấp, hoặc "không an toàn", thì lúc đó nó sẽ được thanh lý và tài sản của nó sẽ bị Hệ thống Maker tự động tịch thu và bán ra để trả nợ. Đây chính là mức phạt bắt buộc.

## Tỷ lệ thế chấp là gì?

Tỷ lệ tài sản thế chấp là tỷ lệ giữa giá trị tài sản thế chấp đã thêm vào CDP và số lượng DAI mà họ đã rút ra.

Ví dụ: giả sử hiện tại Ether bị khóa trong CDP có giá là 150 đô la và được vay 50 Dai. Thì tỷ lệ thế chấp sẽ là 300%. Đối với mỗi 1 Dai, giá trị tài sản thế chấp sẽ có giá là \$ 3. Trong hệ thống Maker, CDP của bạn sẽ bị thanh lý nếu nó nằm dưới [Tỷ lệ thanh lý](liquidation.md#what-is-the-liquidation-ratio), là tỷ lệ thế chấp tối thiểu.

## Những rủi ro liên quan đến việc sở hữu CDP?

Sở hữu CDP chẳng khác gì đang nắm giữ rủi ro. Khi sử dụng nó, bạn cần phải lưu ý bốn loại rủi ro chính sau đây - Rủi ro thị trường, Rủi ro người dùng, Rủi ro hệ thống và Rủi ro biến đổi thông số.

- **Rủi ro thị trường:** Khi sử dụng CDP mà có liên quan đến nợ phải trả và có chức năng chuyển quyền sở hữu tài sản sang một hợp đồng thông minh khác thì nó sẽ bán mất tài sản của bạn trong trường hợp thị trường suy thoái. Bất kỳ CDP nào mang nợ đều sẽ có giá thanh lý riêng, và đó sẽ là giá mà CDP được thanh lý. Sử dụng CDP [đòn bẩy](https://ketoanhanoi.top/don-bay-tai-chinh-la-gi) để giói thiệu về một cấp rủi ro khác. Khả năng nhận thưởng sẽ tăng lên khi dùng đòn bẩy, tuy nhiên khả năng thua lỗ cũng từ đó mà tăng lên cao hơn. Đó là một thực tế thường thấy ở người dùng, họ làm thế để duy trì tỷ lệ tài sản thế chấp luôn ở mức cao và để chuẩn bị cho sự suy thoái của thị trường – mục đích là tránh thanh lý.

- **Rủi ro người dùng:** Đây là những rủi ro liên quan đến lỗi người dùng. MakerDAO không có khả năng đảo ngược bất kỳ giao dịch hoặc thu hồi tiền được gửi đến địa chỉ hoặc hợp đồng không chính xác.

- **Rủi ro hệ thống:** Có khá nhiều rủi ro tiềm ẩn trong quá trình hoạt động và trên con đường thành công của Maker. Sau đây là một số rủi ro hệ thống phổ biến mà chúng tôi tìm được và vẫn chưa phải là tất cả:

  - Cơ sở hạ tầng của hợp đồng thông minh đột ngột bị tấn công mạnh
  - Sự kiện Black Swan trong một hoặc nhiều tài sản thế chấp
  - Lỗi về giá, sự bất hợp lý và các trường hợp không lường trước được
  - Thất bại của cơ sở hạ tầng tập trung. Ví dụ: kết nối internet không thành công, lỗi MetaMask, v.v.

- **Rủi ro biến đổi tham số:** Điều quan trọng cần lưu ý là chủ sở hữu CDP phải chấp nhận tất cả thay đổi của “Risk Parameters”, bộ phận chịu trách nhiệm quản lý hệ thống. Đây chẳng khác gì là rủi ro tài chính đối với chủ sở hữu CDP. Sau đây là một phần danh sách các tham số sẽ bị thay đổi:
  - Phí ổn định
  - Tỷ lệ thanh lý
  - Hạn mức nợ của loại tài sản thế chấp
  - Hình phạt thanh lý

## Hành động thực tiễn để hạn chế rủi ro là gì?

Rủi ro thị trường có thể sẽ được giảm thiểu nếu sử dụng phương pháp báo động giá, và luôn duy trìtỷ lệ thế chấp ở mức cao hơn, thường xuyên theo dõi tình trạng CDP và phải dự trữ đủ số tiền bên ngoài CDP để trả nợ hoặc thêm vào tài sản thế chấp. Nhiều người sẽ thấy rằng mình bị chi quá mức hoặc có vẻ như đang đặt cược cho những rủi ro trong thị trường biến động. Và sẽ dẫn đến việc thua lỗ trong quá trình thanh lý CDP.

Rủi ro người dùng có thể sẽ được giảm thiểu nếu người dùng biết sử dụng số tiền nhỏ để thử nghiệm trước và kiểm tra thật kỹ các địa chỉ mà họ đang tương tác.

## Các lợi ích của việc sở hữu CDP là gì?

- **Điều khoản trả nợ linh hoạt:** Khi sở hữu CDP, bạn sẽ không bị giới hạn thời gian hoặc bị ràng buộc bởi lịch đến hạn trả nợ. Người dùng có thể tự do rút Dai ra ngoài hoặc thêm tài sản thế chấp bất cứ khi nào họ muốn.

- **Không có yêu cầu lịch sử tín dụng:** Không yêu cầu các giấy tờ liên quan đến lịch sử vay hoặc quy trình nộp đơn rườm rà. Bất cứ ai có địa chỉ Ethereum đều có thể truy cập hệ thống.
- **Không có rủi ro đối tác:** Hệ thống hoạt động như một hợp đồng thông minh tự trị, người dùng có thể tương tác với hệ thống tài chính của mình một cách rõ ràng mà không cần phải dựa vào một bên đối tác nào khác để quản lý hoặc giải phóng tiền cho họ. Tất cả các giao dịch đều được ghi lại trên một blockchain công khai và luôn có sẵn để cho mọi người kiểm tra.

- **Giao dịch ký quỹ phi tập trung:** Người dùng có thể chọn khóa Ether, rút DAI và mua thêm Ether để thêm vào vị trí ban đầu. Như vậy, họ có được một vị trí ký quỹ đòn bẩy.

## Tại sao tôi muốn mở CDP?

Có rất nhiều lý do khiến cho mọi người phải sử dụng CDP. Thông qua các trải nghiệm của người dùng, chúng tôi đã thu thập được một vài ví dụ dưới đây:

- **Đòn bẩy**: người dùng thường tin rằng giá trị tài sản của họ sẽ sớm tăng lên, nên đã tận dụng một số tài sản thế chấp hiện có của mình để rút Dai rồi mua tài sản. Sau đó, nếu tài sản đó được đánh giá cao, họ sẽ có thể bán nó với giá cao hơn số Dai mà họ đã rút và trả lại khoản vay ban đầu, còn phần tiền lời sẽ bỏ túi.

- **Dòng tín dụng linh hoạt:** khi người dùng muốn mua xe, họ có thể xác định ngay được rằng các lựa chọn tài chính truyền thống không thể cung cấp các điều khoản hoặc mức phí hấp dẫn như những gì họ có thể nhận được khi mở CDP. Người dùng có thể rút Dai từ ETH, mua xe và trả nợ cho vị trí nợ của mình theo lịch trình riêng.
- **Tái cấp vốn:** người dùng có thể nợ khoản vay với lãi suất cao. Thay vì thanh lý tài sản để chi trả cho các khoản thanh toán, họ có thể chọn rút Dai từ ETH, rồi chuyển đổi Dai thành Fiat và trả một phần hoặc toàn bộ số nợ của mình.

Điều quan trọng cần nhớ là khi người dùng bắt đầu tạo CDP và rút Dai, nghĩa là người dùng đang tạo ra nợ và đang tiếp nhận rủi ro. Ví dụ: Phương sai phí ổn định và thanh lý.

## Có lý do gì để tránh mở CDP không?

\_Không có câu nào trong bài này là lời khuyên đầu tư cả nhưng mọi người nên lưu ý các lý do để tránh mở CDP.

Chẳng hạn, nếu bạn quan tâm đến một loại tiền điện tử ổn định nào đó nhưng không quen với các phương thức tương tác của hợp đồng thông minh, thì bạn không nên mở CDP. Thay vào đó, bạn nên chuyển sang mua DAI trên sàn giao dịch.

Mở CDP cũng có thể dẫn đến việc làm cho bản thân rơi vào các loại rủi ro khác nhau, và dẫn đến tổn thất tài chính.

Nếu bạn tin rằng thị trường đang bước vào thời kỳ suy thoái trường kỳ, thì bạn sẽ muốn đánh giá mức độ quản lý cần có khi mở một CDP. Khi thị trường giá xuống kéo dài thì đòi hỏi tài sản thế chấp cần phải được bổ sung liên tục đến một điểm nào đó để duy trì tình trạng, hoặc phải luôn có sẵn tài sản để đổi DAI để trả nợ tồn đọng.

## Tôi có thể đặt loại tài sản thế chấp nào?

Trong Single Collateral Dai, Ethereum là loại tài sản thế chấp duy nhất được hỗ trợ. Trong lần lặp lại tiếp theo của hệ thống, thì Multi Collonymous Dai sẽ hỗ trợ nhiều loại tài sản thế chấp hơn. Các loại tài sản thế chấp mới sẽ được xác định bởi chủ sở hữu token MKR thông qua quy trình Quản trị.

## Có thể thanh toán Dai từ vítrao đổi không?

Không, bạn phải thanh toán bằng phương thức đặc biệt của hợp đồng, và phương thức này chỉ có thể được thực hiện thông qua giao diện web hoặc tương tác trực tiếp với hợp đồng. Nếu bạn sử dụng bất kỳ phương thức nào khác ngoài giao diện web hay vímở CDP, thì kết quả sẽ rất thảm hại nếu bạn không biết rõ về phương thức của hợp đồng.

## Tôi có thể thế chấp nhiều nhất là bao nhiêu?

Hiện tại, không có giới hạn về số tiền ký quỹ cao nhất có thể được gửi vào CDP.

## Điều gì xảy ra với airdrops khi tôi khóa Ether của mình trong CDP?

Tất cả các tài sản trong hệ thống đều được quản lý bởi các hợp đồng thông minh không có khả năng theo dõi hoặc tái phân phối các token đã được airdrop. Vì vậy các token được gửi đến các địa chỉ này sẽ không được truy cập.

## Điều gì xảy ra nếu tôi muốn đặt cược tài sản thế chấp của mình với một dự án khác và cũng muốn dùng nó để mở CDP?

Khi tài sản thế chấp của bạn đã được đặt cược hoặc ký quỹ, thì sẽ không thể sử dụng cùng một token với hợp đồng khác. Trong tương lai, các dự án chắc sẽ phát hành token để đại diện cho tài sản thế chấp được ký quỹ trong hệ thống của họ. Có thể trong tương lai các người dùng MakerDAO sẽ bỏ phiếu chọn cách sử dụng token để làm tài sản thế chấp.

## Tôi có phải hoàn trả Dai khi giá trị tài sản thế chấp của tôi tăng lên không?

Người dùng phải hoàn trả tất cả các khoản nợ của mình, bao gồm [Phí ổn định](stability-fee.md#phí-ổn-dịnh-là-gì) nếu họ muốn giải phóng toàn bộ tài sản thế chấp của mình. Hệ thống sẽ không tự động thanh toán phí ổn định với các tài sản thế chấp đã tăng giá trị trong CDP.

Khi tài sản thế chấp tăng giá trị, người ta có thể rút phần giá trị tăng thêm của nó ra và vẫn có thể duy trì tỷ lệ thế chấp như cũ. Bất kỳ tài sản thế chấp nào cao hơn tỷ lệ thế chấp tối thiểu đều có thể được rút ra, tuy nhiên làm như vậy sẽ đẩy giá thanh lý lên cao và làm tăng rủi ro. Nếu giá trị tài sản thế chấp của bạn tăng lên, tỷ lệ tài sản thế chấp của bạn cũng sẽ tăng lên.

## Tôi có thể sử dụng CDP sau khi đã được thanh lý không?

Có thể, miễn là vẫn có tài sản thế chấp bên trong CDP thì bạn sẽ rút được Dai. Việc thanh lý sẽ không làm CDP bị đóng lại; mà bạn có thể thêm tài sản thế chấp vào để bắt đầu lại.

## Làm thế nào để tôi có thể xác thực khả năng thanh toán của hệ sinh thái CDP?

Hệ thống làm việc trên blockchain Ethereum, vì vậy tất cả các hợp đồng và giao dịch đều được công khai. Người dùng có thể tương tác với một hệ thống tài chính hoàn toàn rõ ràng mà không cần phải dựa vào trung gian. Bất cứ ai cũng có thể tự xác thực khả năng thanh toán của hệ thống bằng cách truy cập vào một trong nhiều [bảng điều khiển thống kê của MakerDAO](https://github.com/makerdao/awclaw-makerdao/blob/master/README.md#watch-your-dai) hoặc tìm hiểu trực tiếp trên blockchain.
