import React, { Component } from "react";

class Carousel extends Component {
  state = { photos: [], active: 0 };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return photos;
  }
  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, id) => {
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={id}
              src={photo}
              className={id === active ? "active" : ""}
              alt="animal-thumbnail"
            ></img>;
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
