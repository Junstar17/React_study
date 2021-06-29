
import React from 'react'

function Banner(props){
    if(!props.warn){
        return null;
    }
    else{
        return(
            <div className="warning">
                Warning!
            </div>
        )
    }
}
class WarningBanner extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            warn : true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState => ({
            warn: !prevState.warn
        }));
    }


    render(){
        return(
            <div>
                <Banner warn = {this.state.warn}/>
                <button onClick={this.handleClick}>
                    {this.state.warn ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

export default WarningBanner;