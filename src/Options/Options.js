import React from 'react';

export default function Options(props) {
  const options = 
    props.features.map((item, index) => {
      const selectedClass = item.name === props.selected.name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;
    
      return (
        <li key={index} className="feature__item">
          <div className={featureClass}
            onClick={() => props.updateFeature(props.optionKey, item)}>
            { item.name }
              ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(item.cost) })
          </div>
        </li>
      )
    })
  
  return (
      <div className='Options'>
        {options}
      </div>  
      )
}