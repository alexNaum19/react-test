import React from "react";

class CounterInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.count,
      inputValue: this.props.count,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      this.setState(
        {
          count: this.props.count,
          inputValue: this.props.count.toString(),
        },
        this.handleChangeCount
      );
    }
  }

  decrement = () => {
    const {count} = this.state;
    const {min} = this.props;

    if (count <= min) {
      return;
    }

    this.setState(
      state => {
        const count = state.count - 1;
        return {
          count,
          inputValue: count.toString(),
        };
      },
      this.handleChangeCount
    );
  };

  increment = () => {
    const {count} = this.state;
    const {max} = this.props;

    if (count >= max) {
      return;
    }

    this.setState(
      state => {
        const count = state.count + 1;

        return {
          count,
          inputValue: count.toString(),
        };
      },
      this.handleChangeCount
    );
  };

  handleChangeCount = () => {
    if (this.props.onCountChange !== undefined) {
      this.props.onCountChange(this.state.count);
    }
  };

  handleChangeInput = ({target: {value: inputValue}}) => {
    this.setState({inputValue});
  };

  render() {
    return renderChildren({
      decrement: this.decrement,
      handleChangeInput: this.handleChangeInput,
      increment: this.increment,
      state: this.state,
    })
  }
}

const wrapperStyle = {
  display: 'flex',
  margin: '0px auto',
  padding: '5px',
  alignItems: 'center',
};

const btnStyle = {
  cursor: 'pointer',
  padding: 10,
  background: '#1d2e39'
};

const inputStyle = {
  width: 20,
  height: 20,
  background: 'none',
  border: 'none',
  padding: 5,
  textAlign: 'center',
  color: 'inherit'
};

const renderChildren = ({
                          decrement,
                          handleChangeInput,
                          increment,
                          state: {inputValue},
                        }) => (
  <div style={wrapperStyle}>
    <div style={btnStyle} onClick={decrement}>&#8722;</div>
    <input
      type="text"
      style={inputStyle}
      value={inputValue}
      onChange={handleChangeInput}
    />
    <div style={btnStyle} onClick={increment}>&#43;</div>
  </div>
);


export default CounterInput;