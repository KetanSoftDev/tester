import Book from './Book'
import bookdata from './BookData'

const books = [
  {
    id: 1,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I love you to the moon and back',
    author: 'Amelia Hepworth'
  },
  {
    id: 2,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg',
    title: 'If animals kissed goodnight',
    author: 'Ann Whitford Paul'
  },
  {
    id: 3,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81lCGooWS0L._AC_UL200_SR200,200_.jpg',
    title: 'Book of bunny farts',
    author: 'Humour Heals Us'
  }
]

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
