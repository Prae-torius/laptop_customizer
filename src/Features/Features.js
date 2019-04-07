import React from 'react';
import Options from '../Options/Options';

class Features extends React.Component {
  render() {
    const feature = Object.keys(this.props.features)
    .map(key => { 
      return (
        <div className="feature" key={key}>
          <div className="feature__name">{key}</div>
          <ul className="feature__list">
            <Options 
              features={this.props.features[key]} 
              selected={this.props.selected[key]} 
              updateFeature={this.props.updateFeature}
              optionKey={key}
            /> 
           </ul>
        </div>
      )
    })
  
    return (
      <div className='Features'>
        {feature}
      </div>
    )
  } 
}

export default Features;