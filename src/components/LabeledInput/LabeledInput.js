import React, { Component } from 'react';

import './LabeledInput.css'

export default class LabeledInput extends Component {
  setClass(props){
    let cssClass = "";

    if (props.value !== "" && props.value !== undefined){
      cssClass = "populated ";

      if (!this.props.error[this.props.name]){
        cssClass += "valid ";
      } else {
        cssClass += "invalid ";
      }
    }

    if (props.invertColor === true)
      cssClass += "invertColor ";

      return cssClass;
  }

  render() {
    return(
      <div>
        <label className="labeled-input">
          <input
            className={this.setClass(this.props)}
            type={this.props.type ? this.props.type : "text"}
            value={this.props.value ? this.props.value : ""}
            name={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            required={this.props.required}
            locale={this.props.locale}
            min={this.props.min}
            max={this.props.max}
          />
          <span>{this.props.placeholder}</span>
        </label>
        {this.props.error[this.props.name]
          ?
            <span className="error">{this.props.error[this.props.name]}</span>
          :
            <span className="error"></span>
        }
      </div>
    );
  }
}
