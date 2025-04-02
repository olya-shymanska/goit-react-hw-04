import css from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({ pageNum, pageNumChange }) {
    const handlePageNumChange = () => {
        pageNumChange(pageNum + 1);
    };
    return (
        <div className={css.loadMoreBtnContainer}>
            <button onClick={handlePageNumChange}>Load more</button>
            </div>
    );
};