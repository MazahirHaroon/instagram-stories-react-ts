interface CloseProps {
  onClose: () => void;
}

const Close = ({ onClose }: CloseProps) => (
  <button
    onClick={(e) => {
      e.stopPropagation();
      onClose();
    }}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='21'
      height='21'
      viewBox='0 0 24 24'
      fill='white'
      style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,1))' }}
    >
      <path d='M11 0.7H13V23.3H11z' transform='rotate(-45.001 12 12)'></path>
      <path d='M0.7 11H23.3V13H0.7z' transform='rotate(-45.001 12 12)'></path>
    </svg>
  </button>
);

export default Close;
