import { Component } from "react";

class IntroduceComponent extends Component {
    render() {
        return (
            <>
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
            </>
        )
    }
}
export default IntroduceComponent;