import React, { Component } from 'react';
import './home.css';
import { fire, storage } from '../../../fire.js';
import img from '../../../static/img/1.jpg';

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
    }, 2000);
  };

  render() {
   // console.log(this.state.imageUrls);
    console.log("render");
    return (
      <div className="">
	<div>RECIPES</div>
	<div className="images-container">
	  {
	    this.state.imageUrls.map((url) =>{
	      return(
		<div>
		  <img src={url}/>
		</div>
	      );
	    })
	  }
	</div>
      </div>
    );
  }

}

export default Home;
