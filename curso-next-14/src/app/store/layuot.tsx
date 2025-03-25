interface CategoryProps {
  children: React.ReactNode
}

export const Layout: React.FC<CategoryProps> = ({ children }) => {
  return (
    <main>
      <nav>Navegación de las categorías</nav>
      {children}
    </main>
  )
}