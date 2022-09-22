import { Component } from "react";

class SizeComponent extends Component {
    render() {
        return (
            <>
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
            </>
        )
    }
}

export default SizeComponent;