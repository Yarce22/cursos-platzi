interface CategoryProps {
  params: { 
    category: string
  }
}

const Category = async (props: CategoryProps): Promise<React.JSX.Element> => {
  const { category } = await props.params
  return (
    <h1>Categoría dinámica: {category}</h1>
  )
}

export default Category