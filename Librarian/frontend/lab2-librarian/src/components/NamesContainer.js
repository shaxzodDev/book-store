import React, {Component} from "react";

class NamesContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div>
                {this.props?.names?.length > 0 && this.props.names.map(name => <div>{name}</div>)}
            </div>
        )
    }
}
export default NamesContainer;