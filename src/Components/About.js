import React from "react";
import Photo from "../Img/Photo.jpg";
import "../Sass/Components/_about.scss";

export default class About extends React.Component{

    render() {
        return (
            <section id="about" className="flex-center">
                <h1> Welcome on my website </h1>
                <p> Data Scientist - ML - AI</p>
            </section>
        );
    }

}