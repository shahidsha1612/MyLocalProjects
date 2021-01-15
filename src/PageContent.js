import React, { Component } from 'react';
import { ThemeContext } from "./contexts/ThemeContext";
class PageContent extends Component {

    static contextType = ThemeContext;
    render() {
        const { isDarkMode } = this.context;

        const styles = {
            backgroundColor: isDarkMode ? "white" : "#1a1a1a",
            height: "100vh",
            width: "100wh"
        }
        return <div style={styles}>{this.props.children}</div>;
    }
}
export default PageContent;