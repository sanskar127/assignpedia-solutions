import Link from 'next/link';

const NavListItem = ({ className = '', item }) => {
  const nestedItems = (item.children || []).map((child) => (
    <NavListItem key={child.id} item={child} className="pl-4" />
  ));

  return (
    <li key={item.id} className="relative group">
      {item.path && !item.path.includes('http') && !item.target ? (
        <Link href={item.path} title={item.title} className={className}>
          {item.label}
        </Link>
      ) : item.path && item.path.includes('http') ? (
        <a href={item.path} title={item.title} target={item.target} className={className}>
          {item.label}
        </a>
      ) : (
        <span className={className}>{item.label}</span>
      )}

      {nestedItems.length > 0 && (
        <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 space-y-1 z-10">{nestedItems}</ul>
      )}
    </li>
  );
};

export default NavListItem;
