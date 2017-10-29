import React, { Component } from 'react';

class CheckboxGroup extends Component {
  checkboxGroup() {
    const { label, options, input } = this.props;
    return options.map((option, index) => {
      return (
        <div className='checkbox' key={index}>
          <label>
            <input
              type='checkbox'
              name={`${input.name}[${index}]`}
              value={option.name}
              defaultChecked={option.checked}
              onChange={event => {
                const newValue = [...input.value];
                if (event.target.checked) {
                  newValue.push(option.name);
                } else {
                  newValue.splice(newValue.indexOf(option.name), 1);
                }
                return input.onChange(newValue);
              }}
            />
            {option.name}
          </label>
        </div>
      );
    });
  }

  render() {
    return <div>{this.checkboxGroup()}</div>;
  }
}

export default CheckboxGroup;
