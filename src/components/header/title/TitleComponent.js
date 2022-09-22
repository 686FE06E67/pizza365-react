import { Component } from "react";

class TitleComponent extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className="col-sm-12 my-5">
                        <h1 className="text-warning text-uppercase">pizza 365</h1>
                        <em className="text-warning text-capitalize font-weight-bold">trully italian!</em>
                    </div>
                </div>
            </>
        )
    }
}
export default TitleComponent;