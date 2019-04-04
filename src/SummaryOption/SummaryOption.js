import React from 'react';

export default function SummaryOption(props) {
  return (
    Object.keys(props)
    .map(key =>
      <div className="summary__option" key={key}>
        <div className="summary__option__label">{key}  </div>
        <div className="summary__option__value">{props[key].name}</div>
        <div className="summary__option__cost">
          { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(props[key].cost) }
        </div>
      </div>
  ) 
  )
}