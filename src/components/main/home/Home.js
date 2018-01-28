import React, { Component } from 'react';
import './home.css';
import { fire, storage } from '../../../fire.js';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      render: false, // Used for delaying DOM rendering
      imageNumbers: [1, 2, 3, 4, 5],
      imageUrls: []
    };

    this.loadImages = this.loadImages.bind(this);
    this.loadImages();

  }

  loadImages() {
    let storageRef = storage.ref();

    // Hard-coded images
    this.state.imageNumbers.forEach((imgNumber) => {
      let imgLocale = 'stock_images/' + imgNumber + '.jpg';
      let image = storageRef.child(imgLocale);
      image.getDownloadURL().then((url) => {
	console.log(url);
	this.state.imageUrls[imgNumber - 1] = url;
      }).catch((error) => {
	console.log("Unable to retrieve image: " + error);
      });
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
  	render: true
      });
    }, 1250);
  };

  render() {
    return (
      <div className="">
	<div className="home-header">Featured Recipes</div>
	<div className="images-container">
	  {
	    this.state.imageUrls.map((url) =>{
	      return(
		<img key={url} className="home-image" src={url}/>
	      );
	    })
	  }
	</div>
      </div>
    );
  }

}

export default Home;
