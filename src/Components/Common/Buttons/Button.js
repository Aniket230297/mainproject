import './Style.css';

function Button({text, onClick, outlined}) {
  return (
    <div className={outlined ? 'outlined-btn' :'btn'} onClick={()=>console.log()}>{text}</div>
  )
}

export default Button;