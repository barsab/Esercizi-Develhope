import Color from './Color'

export default function Colors({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Color key={item.id} color={item} />
      ))}
    </ul>
  )
}

