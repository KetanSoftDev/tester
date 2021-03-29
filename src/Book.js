import { computeHeadingLevel } from "@testing-library/dom"

const Book = ({ image, title, author }) => {
  const clickHandler = () => {
    alert('Hello world!')
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article className='book' onMouseOver={() => {
      console.log(title)
    }}>
      <img src={image} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Reference Example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        Complex Example
      </button>
    </article>
  )
}

export default Book
