import React from 'react';
import PropTypes  from "prop-types"

const PostImages = (props) => {

    const {Images} = props

    return (
        <div>

        </div>
    );
};

PostImages.proptypes={
    Images : PropTypes.arrayOf(PropTypes.object)
}

export default PostImages;
