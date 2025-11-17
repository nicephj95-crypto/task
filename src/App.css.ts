import { createGlobalStyle } from 'styled-components';

export const vars = createGlobalTheme(":root",{
    colors: {
        main: "#ffa726",
        mainDarker: "#f57c00",
        mainFaded: "#fff3e0",
        mainFadedBright: "#ffe0b2",
        list: "rgba(255, 255, 255, 0.8)",
        task: "rgba(255, 255, 255, 0.6)",
        taskHover: "rgba(255, 255, 255, 0.8)",
        brightText: "#ffffff",
        darkText: "#212121",
        secondaryDarkText: "#424242",
        secondaryDarkTextHover: "#616161",
        selectedTab: "rgba(255, 255, 255, 0.4)",
        updateButton: "#81c784",
        deleteButton: "#e57373",
    },
    fontSizing: {
        T1: "32px",
        T2: "24px",
        T3: "20px",
        T4: "16px",
        T5: "14px",
        T6: "12px",
        P1: "12px",
    },
    spacing: {
        small: "5px",
        medium: "10px",
        big1: "20px",
        big2: "15px",
        listSpacing: "30px",
    },
    font: {
        body: "arial",
    },
    shadow: {
        basic: "4px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    minWidth: {
        list: "250px",
    }
})

export const appContainer = style({
    flexDirection: "column",
    minHeight: "100vh",
    height : "max-content",
    width : "100vw",
})


export const board = style({
    display: "flex",
    flexDirection: "row",
    heighet: "100%",
});

export const buttons = style({
    marginTop: 'auto',
    paddingLeft: vars.spacing.big2,
});
    