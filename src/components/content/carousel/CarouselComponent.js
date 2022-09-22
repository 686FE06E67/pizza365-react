import { Component } from "react";
import images from "../../../assets/images/imgSrc";

class CarouselComponent extends Component {
    render() {
        return (
            <>
                {/* <!-- Khu vực carousel slide --> */}
                <div className="container">
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
            </>
        )
    }
}
export default CarouselComponent;