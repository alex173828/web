import React from 'react';
import ImageGallery from 'react-image-gallery';

class Gallery extends React.Component {
	constructor(props) {
		super(props);

        this.imagesOriginal = this._importImags(require.context('../../../assets/img/gallery/original', false, /\.(png|jpe?g|svg)$/));
        this.imagesThumbnail = this._importImags(require.context('../../../assets/img/gallery/thumbnail', false, /\.(png|jpe?g|svg)$/));
	}

	_importImags(requires) {
		const imgs = [];

		requires.keys()
			.map((item, index) => imgs.push(requires(item)));

		return imgs;
	}

	render() {
		const images = this.imagesThumbnail.map((item, key) => ({
			thumbnail: this.imagesThumbnail[key],
			original: this.imagesOriginal[key]
		}))
		return (
			<div className="section section_gallery">
				<ImageGallery
					autoPlay={true}
					showBullets={false}
					swipingTransitionDuration={300}
					items={images}
				/>
			</div>
		);
	}
}

export default Gallery;
