export function Book({ title, author, imgSrc, number }) {
  return (
    <article className="book">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <h4
        /////////// *CSS* ////////////
        style={{
          color: '#617d98',
          fontSize: '0.75rem',
          marginTop: '0.5rem',
        }}
        //////////////////////////////
      >
        {author}
      </h4>
      <number className="number">{number}</number>
    </article>
  )
}
