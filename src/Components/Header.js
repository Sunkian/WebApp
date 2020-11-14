import React from "react";
import Photo from "../Img/Photo.jpg";
import "../Sass/Components/_header.scss";

export default class Header extends React.Component{

    render() {
        return (
           <section id="header" className="flex-center">
               <h1> Alice <br/> Pagnoux </h1>
               <p> Msc in AI, Data Science and ML</p>

           </section>

        );
    }

}