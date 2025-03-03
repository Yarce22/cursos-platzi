import { useState } from "react";

function useLoading (initialLoading : boolean = false) {
  const [isLoading, setIsLoading] = useState(initialLoading);

  return {
    isLoading,
    setIsLoading,
  }
}

type UserProps = {
  name: string;
}

const UserComponent: React.FC<UserProps> = ({ name }) => {
  const { isLoading, setIsLoading } = useLoading(false);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <p>Hello, {name}!</p>
      <button onClick={() => setIsLoading(true)}>Load</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name="coder" />;
};
