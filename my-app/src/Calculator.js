import React from 'react'
import {Button } from 'carbon-components-react'

const method ={
    c:'Celsius',
    f:'Fahreheit'
}
class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        this.onChange= this.onChange.bind(this)
    }
   onChange(e){
    this.props.onChange(e.target.value);
   }
    render(){
        const scale = this.props.type;
        const temp = this.props.temperature;
        return(
            <div>
                <legend> Enter temperature in {method[scale]}</legend>
                <input value={temp} onChange={this.onChange}></input>
            </div>
        )
    }
}

function BoilDetect(props){
    const isBoil = props.temp >= 100 ? true : false
    return(
        <div>
            {isBoil ? <h1>The water would boild </h1>: <h1>The water would not boild </h1>}
        </div>
    )
}
function toCel(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}
function toFa(celsius){
    return (celsius * 9 / 5) + 32;
}
function tryConvert(temp,convert){
    const input = parseFloat(temp);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000)/1000;
    return rounded.toString();
    
}
class Calculator extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            type:'c',
            temperature : 0
        };
        this.handleOnChange_Cel = this.handleOnChange_Cel.bind(this);
        this.handleOnChange_Fa = this.handleOnChange_Fa.bind(this);
    }
  
    handleOnChange_Cel(temperature){
        this.setState({
            type:'c',
            temperature
        })
    }
    handleOnChange_Fa(temperature){
        this.setState({
            type:'f',
            temperature
        })
    }

    render(){
        const type = this.state.type;
        const temperature = this.state.temperature;
        const Fa = type ==='c' ? tryConvert(temperature,toFa) : temperature;
        const Celsius = type ==='f' ? tryConvert(temperature,toCel) : temperature;
        return(
            <div>
                <TemperatureInput 
                type='c' 
                onChange={this.handleOnChange_Cel}
                temperature={Celsius}
                />
                <TemperatureInput type='f' onChange={this.handleOnChange_Fa} temperature={Fa} />
                <BoilDetect temp = {Celsius} />
            </div>
        )
    }
}

export default Calculator;