import { Component } from "react";

class DrinkComponent extends Component {
    render() {
        return (
            <>
                {/* <!-- Khu vực chọn loại đồ uống --> */}
                <div className="container mt-5 form-group">
                    <h1 className="text-warning text-center">Chọn đồ uống</h1>
                    <hr className="bg-warning hr-30" />
                    <select name="loaiDoUong" id="idLoaiDoUong" className="form-control">
                        <option value="0">Tất cả loại nước uống</option>
                    </select>
                </div>
            </>
        )
    }
}
export default DrinkComponent;