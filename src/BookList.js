import Book from './Book'
import bookdata from './BookData'

const BookList = () => {
  return (
    <section className='booklist'>
      {bookdata.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  )
}

export default BookList
