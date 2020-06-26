import * as React from "react";
import * as style from "./style.scss"
import SampleComponent from "../../components/SampleComponent";
import kitty from "../../assets/img/kitty.jpg"

interface ILandingPageProps {
    appName: string
}

class LandingPage extends React.Component<ILandingPageProps> {

    handleClick = () => {
        alert("clicked")
    }

    render () {
        return (
            <div className={style.container}>
                <div>
                    <h1>{this.props.appName}</h1>
                    <p onClick={this.handleClick}>App is running</p>
                    <SampleComponent/>
                    <img src={kitty} className={style.kittyPhoto}/>
                </div>
            </div>
        )
    }
}

export default LandingPage;