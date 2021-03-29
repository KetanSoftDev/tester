import Book from './Book'

const firstbook = {
  image:
    'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I love you to the moon and back',
  author: 'Amelia Hepworth'
}
const secondbook = {
  image:
    'https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg',
  title: 'If animals kissed goodnight',
  author: 'Ann Whitford Paul'
}
const thirdbook = {
  image:
    'https://images-na.ssl-images-amazon.com/images/I/81lCGooWS0L._AC_UL200_SR200,200_.jpg',
  title: 'Book of bunny farts',
  author: 'Humour Heals Us'
}

const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        title={firstbook.title}
        author={firstbook.author}
        image={firstbook.image}
      />
      <Book
        title={secondbook.title}
        author={secondbook.author}
        image={secondbook.image}
      />
      <Book title={thirdbook.title}
        author={thirdbook.author}
        image={thirdbook.image}>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta sit atque saepe eos ea eius, sequi esse porro totam maxime.
        </p>
      </Book>

    </section>
  )
}

export default BookList
