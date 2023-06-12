const Card = ({card}) => {
      const src = card.image;
    return(
        <div>
         <div>{card.code}</div>
         <img src = {src}></img>
         </div>
    );
}
export default Card;