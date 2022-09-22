import { Component } from "react";
import NavbarComponent from "./navbar/NavbarComponent";
import TitleComponent from "./title/TitleComponent";

class HeadComponent extends Component {
    render() {
        return (
            <>
                <NavbarComponent />
                <TitleComponent />
            </>
        )
    }
}
export default HeadComponent;