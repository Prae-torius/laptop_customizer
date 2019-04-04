import React from 'react';
import Features from '../Features/Features';

class Form extends React.Component {
  render() {
    
    return (
      <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <Features 
              features={this.props.features} 
              selected={this.props.selected} 
              updateFeature={this.props.updateFeature}
            />
      </section>
    )
  }
}

Form.defaultProps = {
  features: {}
}

export default Form;