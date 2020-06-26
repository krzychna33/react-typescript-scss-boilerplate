import * as React from "react";
import * as style from "./style.scss"


const SampleComponent: React.FC<{}> = () => {
    return (
        <div className={style.container}>
            <p>Boilerplate by <a href="http://krzychnadev.ovh/" target="_blank">krzychna33</a></p>
            <p><a href="https://github.com/krzychna33/react-typescript-scss-boilerplate" target="_blank">Github repo</a></p>
        </div>
    )
};

export default SampleComponent;