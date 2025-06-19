interface UsernameLabelProps {
  label: string;
}

const UsernameLabel = ({ label }: UsernameLabelProps) => {
  return (
    <div className='flex justify-center'>
      <p className='text-xs w-18 text-center text-ellipsis overflow-hidden'>
        {label}
      </p>
    </div>
  );
};

export default UsernameLabel;
