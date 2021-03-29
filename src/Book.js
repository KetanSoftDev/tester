const Book = ({image, title, author, children}) => {

  return (
    <article className='book'>
      <img src={image} alt='' />
      <h4>{title}</h4>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

export default Book
