interface UsernameLabelProps {
  label: string;
  className?: string;
}

const UsernameLabel = ({ label, className = '' }: UsernameLabelProps) => {
  return (
    <p
      className={`text-xs text-center text-ellipsis overflow-hidden ${className}`}
    >
      {label}
    </p>
  );
};

export default UsernameLabel;
