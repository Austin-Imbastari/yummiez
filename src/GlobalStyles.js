import { createGlobalStyle } from "styled-components";
import yumFont from "./assets/fonts/BiteChocolate-2RGl.ttf";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Yum';
    src: local('Yum'), url(${yumFont}) format('ttf');
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Montserrat" , sans-serif
}

body {
    margin: 0 15%;
    background: #211F1F;
}

h3 {
    color: #DDDAA5;
    padding-left: 0px;
}



`;

export default GlobalStyles;
