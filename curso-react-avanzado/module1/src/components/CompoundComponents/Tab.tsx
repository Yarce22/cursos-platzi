interface TabProps {
  children: React.ReactNode;
  label: string;
};

const Tab: React.FC<TabProps> = ({ label, children }) => {
  return (
    <>
      <em>{label}</em>
      <span>{children}</span>
    </>
  );
};

export default Tab;
