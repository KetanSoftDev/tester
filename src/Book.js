const Book = ({ image, title, author }) => {
  return (
    <article className='book'>
      <img src={image} alt='' />
      <h4>{title}</h4>
      <h4>{author}</h4>
    </article>
  )
}

export default Book
