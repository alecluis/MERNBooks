import BookSingleCard from './BookSingleCard';
import PropTypes from 'prop-types';

const BooksCard = ({ books }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {books.map((item) => (
                <BookSingleCard key={item.id} book={item} />
            ))}
        </div>
    );
};

BooksCard.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired, 
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            publishYear: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default BooksCard;