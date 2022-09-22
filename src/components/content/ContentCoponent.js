import { Component } from "react";
import CarouselComponent from "./carousel/CarouselComponent";
import DrinkComponent from "./drink/DrinkComponent";
import FormComponent from "./form/FormComponent";
import IntroduceComponent from "./introduce/IntroduceComponent";
import SizeComponent from "./pizzaSize/SizeComponent";
import TypeComponent from "./pizzaType/TypeComponent";

class ContentComponent extends Component {
    render() {
        return (
            <>
                <CarouselComponent />
                <IntroduceComponent />
                <SizeComponent />
                <TypeComponent />
                <DrinkComponent />
                <FormComponent />
            </>
        )
    }
}

export default ContentComponent;