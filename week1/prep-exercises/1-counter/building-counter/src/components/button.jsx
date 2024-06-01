export default function ButtonComponent({handleClick, text}) {
    return (
    <button onClick={handleClick}>{text}</button>
    );
  }
