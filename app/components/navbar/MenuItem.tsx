'use client';
 

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem = ({ label, onClick }) => {
  return (
    <div className="relative">
      <div 
        onClick={onClick} 
        className="
          px-4 
          hover:text-gray-700
          py-3 
          hover:bg-gray-200 
          transition
          font-semibold
        "
      >
        {label}
      </div>
     
    </div>
  );
};
export default MenuItem;