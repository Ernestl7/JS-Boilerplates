import React, { Component } from 'react';

class Gallery extends Component {
  render () {
    let alternate = 'http://www.missingveterans.com/wp-content/uploads/2015/01/Help-icon.png';
    return (
      <div>
        {
          this.props.items.map((item, index) => {
            let {title, imageLinks, infoLink} = item.volumeInfo;
            return (
              <a
                key={index}
                className="book"
                href={infoLink}
                target="_blank"
              >
                <img
                  src={imageLinks !== undefined ? imageLinks.thumbnail : alternate}
                  alt="Book Image"
                  className="book-img"
                />
                <div className="book-text">
                  {title}
                </div>
              </a>
            )
          })
        }
      </div>
    )
  }
}

export default Gallery
