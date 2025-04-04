import css from './ImageCard.module.css'

export default function ImageCard({ photo, onPhotoClick }) {
    return (
        <div className={css.imgContainer}>
            <img src={photo.urls.small}
                alt={photo.alt_description}
                onClick={() => onPhotoClick(photo)}
                className={css.img}
            />
        </div>
    );
}; 