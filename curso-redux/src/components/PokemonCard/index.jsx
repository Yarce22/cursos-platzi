import PropTypes from "prop-types"
import { StarButton } from "../StarButton"
import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import { useDispatch } from "react-redux"
import { setFavorite } from "../../actions"

const PokemonCard = ({ name, img, abilities, types, id, favorite }) => {
  const dispatch = useDispatch()

  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}))
  }

  return (
    <>
      <Card 
        title={name}
        cover={<img alt={name} src={img} />}
        extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
      >
        <Meta title={abilities} />
        <Meta description={types} />
      </Card>
    </>
  )
}

PokemonCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  abilities: PropTypes.string,
  types: PropTypes.string,
  id: PropTypes.number,
  favorite: PropTypes.bool
}

export { PokemonCard }
