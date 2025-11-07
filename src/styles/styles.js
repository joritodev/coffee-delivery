import  { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *, body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        overflow-x: hidden;
    }

    body {
        background-color: #FAFAFA;
        overflow-x: hidden;
        width: 100%;
        max-width: 100vw;
    }

    #root {
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
    }

`