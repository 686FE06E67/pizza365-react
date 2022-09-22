import { Component } from "react";

class NavbarComponent extends Component {
    render() {
        return (
            <>
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
            </>
        )
    }
}
export default NavbarComponent;