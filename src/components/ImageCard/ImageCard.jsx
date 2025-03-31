export default function ImageCard({photo: {alt_description, urls:{regular}}}) {
    return (
        <div>
            <img src={regular} alt={alt_description} />
            </div>
    );
}; 