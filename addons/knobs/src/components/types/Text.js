import PropTypes from 'prop-types';
import React from 'react';

import { Textarea } from '@storybook/components';

class TextType extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.knob.value !== this.props.knob.value;
  }

  handleChange = event => {
    const { value } = event.target;
    this.props.onChange(value);
  };

  render() {
    const { knob } = this.props;

    return <Textarea id={knob.name} value={knob.value} onChange={this.handleChange} size="flex" />;
  }
}

TextType.defaultProps = {
  knob: {},
  onChange: value => value,
};

TextType.propTypes = {
  knob: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  }),
  onChange: PropTypes.func,
};

TextType.serialize = value => value;
TextType.deserialize = value => value;

export default TextType;
