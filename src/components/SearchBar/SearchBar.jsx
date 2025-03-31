import { toast } from 'react-hot-toast';

export default function SearchBar({ onClick }) {

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.searchTopic.value.trim();
    if (inputValue === '') {
       toast.error('Please enter a topic to search for images.');
    } else {
      onClick(inputValue);
      event.target.reset();
    }
  } 

    return (
        
<header>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
    placeholder="Search images and photos"
    name="searchTopic" 
    />
    <button type="submit" >Search</button>
  </form>
</header>

        );
};