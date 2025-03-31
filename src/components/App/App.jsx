import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import { fetchImages } from '../../HttpRequest';
import './App.module.css'
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Toaster } from 'react-hot-toast'; 
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

function App() {
  const [searchTopic, setSearchTopic] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searched, setSearched] = useState(false);
  const [page, setPage] = useState(1);


  const onSubmitSearch =  (newTopic) => {
    setSearchTopic(newTopic);
    setPage(1);
    setData([]);
  };

  useEffect(() => {
    if (searchTopic === '') {
      return
    };

    async function getData() {
      try {
        setError(false);
        setLoading(true);
        const images = await fetchImages(searchTopic, page);
        setData((prevImages) => {
          return [...prevImages, ...images]
        });
      } catch (error) {
        setError(true);
      }
      finally {
        setLoading(false);
        setSearched(true);
      }
    }
    getData();
    console.log(page, searchTopic);
  }, [page, searchTopic]); 

  return (
    <>
      <SearchBar onClick={onSubmitSearch} />
      {searched && data.length === 0 && !loading && !error ? <p>No images found</p> : <ImageGallery newData={data} />} 
      {loading && <Loader loading={loading} />} 
       {error && <ErrorMessage error={error} />}
   <Toaster
  position="top-right"
  reverseOrder={false}
      />
      {data.length > 0 && !loading && ( <LoadMoreBtn pageNum={page} pageNumChange={setPage} />)}
    </>
  )
}

export default App
