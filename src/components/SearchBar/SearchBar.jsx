import { toast } from 'react-hot-toast';
import css from './SearchBar.module.css'

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
        
<header className={css.header}>
  <form onSubmit={handleSubmit} className={css.form}>
          <input
            className={css.input}
      type="text"
      autoComplete="off"
      autoFocus
    placeholder="Search images and photos"
    name="searchTopic" 
    />
    <button type="submit" className={css.button}>Search</button>
  </form>
</header>

        );
};