const Button = ({ value, onClick, children }) => {
  return (
    <button type="button" onClick={() => onClick(value)}>
      {children}
    </button>
  )
}

export default Button
