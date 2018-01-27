import React, { Component } from 'react';
import './home.css';
import { fire, storage } from '../../../fire.js';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      imageNumbers: [1, 2, 3, 4, 5],
      imageUrls: []
    };

    this.loadImages = this.loadImages.bind(this);
    this.displayImages = this.displayImages.bind(this);

  }

  loadImages() {
    let storageRef = storage.ref();
    let stock_images = storageRef.child('stock_images');

    // Hard-coded images
    this.state.imageUrls = this.state.imageNumbers.map((imgNumber) => {
      let imgLocale = 'stock_images/' + imgNumber + '.jpg';
      let image = storageRef.child(imgLocale);
      image.getDownloadURL().then((url) => {
	console.log(url);
	return (
	  <img alt="" src={url}/>
	);
      }).catch((error) => {
	console.log("Unable to retrieve image");
      });
    });
  }

  displayImages() {
    this.loadImages();
    this.state.imageUrls.forEach((url) => {
      return(
	<img src={url}/>
      );
    });
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  render() {
    return (
      <div className="">
	<div>RECIPES</div>
	<div className="images-container">
	  { this.displayImages() }
	</div>
      </div>
    );
  }

}

export default Home;
