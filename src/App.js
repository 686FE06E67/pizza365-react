import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from './assets/images/imgSrc';

function App() {
  return (
    <div>
      <body className='min-vh-100'>
        {/* <!-- Khu vực thanh điều hướng --> */}
        <div className="container-fluid">
          <div className="row col-sm-12 font-weight-bold">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav nav-fill w-100 bg-warning">
                  <a className="nav-item nav-link active" href="#current">Trang chủ <span
                    className="sr-only"></span></a>
                  <a className="nav-item nav-link" href="#comboRegion">Combo</a>
                  <a className="nav-item nav-link" href="#pizzaTypeRegion">Loại Pizza</a>
                  <a className="nav-item nav-link" href="#sendOrderRegion">Gửi đơn hàng</a>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* <!-- Khu vực carousel slide --> */}
        <div className="container">
          <div className="col-sm-12 my-5">
            <h1 className="text-warning text-uppercase">pizza 365</h1>
            <em className="text-warning text-capitalize font-weight-bold">trully italian!</em>
          </div>
          <div id="pizza365-slide" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#pizza365-slide" data-slide-to="0" className="active"></li>
              <li data-target="#pizza365-slide" data-slide-to="1"></li>
              <li data-target="#pizza365-slide" data-slide-to="2"></li>
              <li data-target="#pizza365-slide" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img src={images.pizza1} className="d-block w-100" alt="First slide"></img>
              </div>
              <div className="carousel-item">
                <img src={images.pizza2} className="d-block w-100" alt="Second slide"></img>
              </div>
              <div className="carousel-item">
                <img src={images.pizza3} className="d-block w-100" alt="Third slide"></img>
              </div>
              <div className="carousel-item">
                <img src={images.pizza4} className="d-block w-100" alt="Fourth slide"></img>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Khu vực giới thiệu --> */}
        <div className="container mt-3">
          <h1 className="text-warning text-center mt-5">Tại sao lại Pizza 365</h1>
          <hr className="bg-warning hr-50" />
          <div className="card-group">
            <div className="card border-warning">
              <div className="card-body bg-lightgolden">
                <h4 className="card-title">Đa dạng</h4>
                <p className="card-text">Số lượng pizza đang dạng, có đầy đủ các loại pizza đang hot nhất hiện nay.</p>
              </div>
            </div>
            <div className="card border-warning">
              <div className="card-body bg-yellow">
                <h4 className="card-title">Chất lượng</h4>
                <p className="card-text">Nguyên liệu sạch 100% rõ nguồn gốc, quy trình chế biển đảm bảo vệ sinh an toàn
                  thực phẩm</p>
              </div>
            </div>
            <div className="card border-warning">
              <div className="card-body bg-lightsalmon">
                <h4 className="card-title">Hương vị</h4>
                <p className="card-text">Đảm bảo hương vị ngon, độc, lạ mà bạn chỉ có thể trải nghiệm từ Pizza 365</p>
              </div>
            </div>
            <div className="card border-warning">
              <div className="card-body bg-warning">
                <h4 className="card-title">Dịch vụ</h4>
                <p className="card-text">Nhân viên thân thiện, nhà hàng hiện đại. Dịch vụ giao hàng nhanh, chất lượng
                  tân tiến</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Khu vực kích cỡ combo pizza --> */}
        <div className="container mt-5" id="comboRegion">
          <h1 className="text-center text-warning mt-5">Chọn size Pizza</h1>
          <hr className="bg-warning hr-50" />
          <p className="text-warning text-center">Chọn combo pizza phù hợp với bạn</p>
          <div className="row form-group">
            <div className="col-sm">
              <div className="card border-warning mb-3 text-center">
                <div className="card-header bg-warning border-warning">
                  <h2>S (small)</h2>
                </div>
                <div className="card-body">

                  <p className="card-text">Đường kính: <strong>20cm</strong></p>
                  <hr />
                  <p className="card-text">Sườn nướng: <strong>2</strong></p>
                  <hr />
                  <p className="card-text">Salad: <strong>200g</strong></p>
                  <hr />
                  <p className="card-text">Nước ngọt: <strong>2</strong></p>
                  <hr />
                  <h1 className="card-title">150.000</h1>
                  <p>VNĐ</p>
                </div>
                <div className="card-footer bg-light border-warning"><button className="btn btn-warning w-100"
                  id="btn-combo-s">Chọn</button>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card border-warning mb-3 text-center">
                <div className="card-header bg-warning border-warning">
                  <h2>M (medium)</h2>
                </div>
                <div className="card-body">

                  <p className="card-text">Đường kính: <strong>25cm</strong></p>
                  <hr />
                  <p className="card-text">Sườn nướng: <strong>4</strong></p>
                  <hr />
                  <p className="card-text">Salad: <strong>300g</strong></p>
                  <hr />
                  <p className="card-text">Nước ngọt: <strong>3</strong></p>
                  <hr />
                  <h1 className="card-title">200.000</h1>
                  <p>VNĐ</p>
                </div>
                <div className="card-footer bg-light border-warning"><button className="btn btn-warning w-100"
                  id="btn-combo-m">Chọn</button>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card border-warning mb-3 text-center">
                <div className="card-header bg-warning border-warning">
                  <h2>L (large)</h2>
                </div>
                <div className="card-body">

                  <p className="card-text">Đường kính: <strong>30cm</strong></p>
                  <hr />
                  <p className="card-text">Sườn nướng: <strong>8</strong></p>
                  <hr />
                  <p className="card-text">Salad: <strong>500g</strong></p>
                  <hr />
                  <p className="card-text">Nước ngọt: <strong>4</strong></p>
                  <hr />
                  <h1 className="card-title">250.000</h1>
                  <p>VNĐ</p>
                </div>
                <div className="card-footer bg-light border-warning"><button className="btn btn-warning w-100"
                  id="btn-combo-l">Chọn</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Khu vực chọn loại pizza --> */}
        <div className="container mt-5" id="pizzaTypeRegion">
          <h1 className="text-center text-warning">Chọn loại Pizza</h1>
          <hr className="bg-warning hr-50" />
          <div className="row form-group">
            <div className="col-sm-4">
              <div className="card">
                <img src={images.seafood} alt="ocean-mania" className="card-img-top" />
                <div className="card-body">
                  <h4 className="card-title text-uppercase">ocean mania</h4>
                  <p className="card-text text-uppercase">pizza hải sản xốt mayonnaise</p>
                  <p className="card-text text-capitalize">Xốt cà chua, phô mai mozzarella, tôm, mực, thanh cua, hành
                    tây.
                  </p>
                  <button className="btn btn-warning text-center w-100" id="btn-seafood">Chọn</button>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <img src={images.hawaii} alt="hawaiian" className="card-img-top" />
                <div className="card-body">
                  <h4 className="card-title text-uppercase">hawaiian</h4>
                  <p className="card-text text-uppercase">pizza dăm bông dứa kiểu hawaii</p>
                  <p className="card-text text-capitalize">Xốt cà chua, phô mai mozzarella, thịt dăm bông, thơm.
                  </p>
                  <button className="btn btn-warning text-center w-100" id="btn-hawaii">Chọn</button>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <img src={images.bacon} alt="bacon" className=" card-img-top" />
                <div className="card-body">
                  <h4 className="card-title text-uppercase">cheesy chicken bacon</h4>
                  <p className="card-text text-uppercase">pizza gà phô mai thịt heo xông khói</p>
                  <p className="card-text text-capitalize">Xốt phô mai, thịt gà, thịt heo muối, phô mai mozzarella, cà
                    chua.
                  </p>
                  <button className="btn btn-warning text-center w-100" id="btn-bacon">Chọn</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Khu vực chọn loại đồ uống --> */}
        <div className="container mt-5 form-group">
          <h1 className="text-warning text-center">Chọn đồ uống</h1>
          <hr className="bg-warning hr-30" />
          <select name="loaiDoUong" id="idLoaiDoUong" className="form-control">
            <option value="0">Tất cả loại nước uống</option>
          </select>
        </div>

        {/* <!-- Khu vực gửi đơn hàng --> */}
        <div className="container my-5" id="sendOrderRegion">
          <h1 className="text-warning text-center">Gửi đơn hàng</h1>
          <hr className="bg-warning hr-30" />
          <form className="form-group" id="formOrder">
            <div className="row">
              <label for="hoTen">Tên:</label>
              <input type="text" name="hoTen" id="hoTen" className="form-control" />
              <label for="email">Email:</label>
              <input type="text" name="email" id="email" className="form-control" />
              <label for="soDienThoai">Số điện thoại:</label>
              <input type="text" name="soDienThoai" id="soDienThoai" className="form-control" />
              <label for="diaChi">Địa chỉ:</label>
              <input type="text" name="diaChi" id="diaChi" className="form-control" />
              <label for="maGiamGia">Mã giảm giá:</label>
              <input type="text" name="maGiamGia" id="maGiamGia" className="form-control" />
              <label for="loiNhan">Lời nhắn:</label>
              <input type="text" name="loiNhan" id="loiNhan" className="form-control" />
            </div>
          </form>
          <button className="btn btn-warning w-100 mt-5" id="btn-send-order">Gửi</button>
        </div>

      </body>
      {/* <!-- Khu vực footer --> */}
      <footer className="card-footer bg-warning text-center">
        <div className="container-fluid">
          <div className="my-4">
            <h5>Footer</h5>
            <button className="btn btn-dark" id="btn-scroll-top"><i className="fas fa-arrow-up"></i> To the top</button>

          </div>
          <span><i className="fab fa-facebook"></i> <i className="fab fa-instagram" aria-hidden="true"></i> <i
            className="fab fa-snapchat"></i> <i className="fab fa-pinterest"></i> <i className="fab fa-twitter"></i> <i
              className="fab fa-linkedin"></i></span>

        </div>
        <span className="text-center font-weight-bold mt-2"><i className="far fa-copyright"></i> Powered by DEVCAMP</span>
      </footer>
    </div>
  );
}

export default App;
