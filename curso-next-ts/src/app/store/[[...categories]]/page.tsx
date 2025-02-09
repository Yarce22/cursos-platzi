interface CategoryProps {
  params: { 
    categories: string[],
    searchParams?: string
  }
}

const Category = async (props: CategoryProps): Promise<React.JSX.Element> => {
  const { categories } = await props.params
  return (
    <h1>Categoría dinámica: {categories}</h1>
  )
}

export default Category