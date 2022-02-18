import React from 'react';
import './Comment.scss'
const Comments = ({img, title, comment, rating}) => {
    return (
        <div className="comments_container">
            
            <div className="main_comments_container">
                <div className="comment_info">
                    <div className="comment_img_container">
                        <img src={img}/>
                    </div>
                    <div>
                        <h3 className="title">{title}</h3>
                        <p className="comment">{comment}</p>
                    </div>
                </div>
                <div>reyting</div>
            </div>
        </div>
    );
};

export default Comments;