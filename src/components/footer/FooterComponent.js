import { Component } from "react";

class FooterComponent extends Component {
    render() {
        return (
            <> {/* <!-- Khu vực footer --> */}
                < footer className="card-footer bg-warning text-center" >
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
                </footer >
            </>
        )
    }
}
export default FooterComponent;