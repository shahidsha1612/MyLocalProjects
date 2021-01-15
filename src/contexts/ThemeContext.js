import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDarkMode: false,
            Mode: "LightMode"
        };
        this.toogleTheme = this.toogleTheme.bind(this);
    }
    toogleTheme() {
        this.setState({ isDarkMode: !this.state.isDarkMode });
        this.setState({ Mode: this.state.isDarkMode ? " DarkMode" : "LightMode" });

    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toogleTheme: this.toogleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}