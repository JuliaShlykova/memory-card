export default function Card(props) {
  const {card: {src, title, backgroundColor, backgroundColorForDiv}, clickCard} = props;
  return (
    <button style={{backgroundColor: backgroundColorForDiv}} className="cards" onClick={(() => clickCard(title))}>
        <figure>
          <div className="div-for-img" style={{backgroundColor: backgroundColor}}>
          <img src={src} alt={title}/>
          </div>
          <figcaption style={{color: backgroundColor}}>{title}</figcaption>
        </figure>
        
    </button>
  )
}