import { Component } from "react";
import images from "../../../assets/images/imgSrc";

class TypeComponent extends Component {
    render() {
        return (
            <>
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
            </>
        )
    }
}

export default TypeComponent;