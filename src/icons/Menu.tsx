interface IconProps extends React.SVGProps<SVGSVGElement> {}

const MenuIcon: React.FC<IconProps> = ({ className = "", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-menu ${className}`}
      {...props}
    >
      <line x1="4" x2="20" y1="12" y2="12" stroke="white" />
      <line x1="4" x2="20" y1="6" y2="6" stroke="white" />
      <line x1="4" x2="20" y1="18" y2="18" stroke="white" />
    </svg>
  );
};

export default MenuIcon;
