import React, { Component, PropTypes } from "react";

export default class FormLabel extends Component {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
    };

    static defaultProps = {
        title: "",
        description: ""
    };

    render() {
        let { title, description, children } = this.props;
        return (
            <div className="mb3">
                { title && <label className="h5 text-bold text-uppercase">{ title }</label> }
                { description && <p className="mt1 mb2">{description}</p> }
                {children}
            </div>
        );
    }
}
