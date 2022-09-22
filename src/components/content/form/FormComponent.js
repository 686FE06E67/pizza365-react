import { Component } from "react";

class FormComponent extends Component {
    render() {
        return (
            <>
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
            </>
        )
    }
}

export default FormComponent;