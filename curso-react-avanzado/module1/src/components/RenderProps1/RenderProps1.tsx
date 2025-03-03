type ChildParentComponentProps = {
  render: (name: string) => JSX.Element;
}

export const ChildParentComponent: React.FC<ChildParentComponentProps> = ({ render }) => {
  const name = 'Teffcode'
  return (
    <div>
      {render(name)}
    </div>
  );
};

export const ParentComponent = () => {
  return (
    <>
      <ChildParentComponent render={(name) => <p>Hello, {name}!</p>} />
    </>
  );
};
