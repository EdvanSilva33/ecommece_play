import Tag from '../Tag'

import { Card, Titulo, Descricao, Infos } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}
const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => {
  const getdescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + ' ...'
    }
    return description
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getdescription(description)}</Descricao>
    </Card>
  )
}

export default Product
