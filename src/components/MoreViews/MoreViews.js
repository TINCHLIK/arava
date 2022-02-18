import React from 'react';
import './MoreViews.scss'
const MoreViews = ({category, name, categoryViewCount, nameViewCount}) => {
    return (
        <div className="more_views">
            <div className="more_views_item">
                <h1>{category}</h1>
                <b>{categoryViewCount}</b>
            </div>
            <div className="more_views_item">
                <h2>{name}</h2>
                <span>{nameViewCount}</span>
            </div>
        </div>
    );
};

export default MoreViews;