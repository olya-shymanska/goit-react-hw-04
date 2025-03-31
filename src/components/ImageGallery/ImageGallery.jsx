import ImageCard from "../ImageCard/ImageCard"
export default function ImageGallery({ newData }) {
    return (
        <div>
            <ul>
                {newData.map((oneNewData) => (
                    <li key={oneNewData.id}>
                        <ImageCard photo={oneNewData} />
                        </li>
                ))}
            </ul>
        </div>);
};