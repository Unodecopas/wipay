const Selector = ({ options, onChange }) => {
  return (
    <select name='order' onChange={e => onChange(e.target.value)}>
      {options?.map((opt, i) => {
        return (
          <optgroup key={i}>
            <option value={opt.value}>{'⬆  ' + opt.label.toUpperCase()}</option>
            <option value={opt.value + 'DESC'}>{'⬇  ' + opt.label.toUpperCase()}</option>
          </optgroup>
        )
      })}
    </select>
  )
}

export default Selector
