import "./styles.css";

export default function Blocks({ className, clickHandler, color }) {
  return (
    <div className={className} onClick={() => clickHandler(color)} />
  )
}