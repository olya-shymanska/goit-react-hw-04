import ImageCard from "../ImageCard/ImageCard"
import css from './ImageGallery.module.css'

export default function ImageGallery({ newData, onPhotoClick }) {
    return (
        <div>
            <ul className={css.imagesContainer}>
                {newData.map((oneNewData) => (
                    <li key={oneNewData.id}>
                        <ImageCard photo={oneNewData} onPhotoClick={onPhotoClick} />
                        </li>
                ))}
            </ul>
        </div>);
};