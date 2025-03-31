export default function LoadMoreBtn({pageNum, pageNumChange}) {
    const handlePageNumChange = () => {
        pageNumChange(pageNum + 1);
    };
    return (
        <button onClick={handlePageNumChange}>Load more</button>
    );
};