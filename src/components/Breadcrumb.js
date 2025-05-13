import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  return (
    <div className="bg-[#1D1D1D] text-white px-6 py-2 text-[14px] 2xl:text-[16px] font-['Roboto_Condensed'] w-full z-40 sticky top-[115px]">
      <nav className="flex items-center space-x-2">
        <Link
          to="/"
          className="hover:text-[#22BDB6] hover:underline transition-colors cursor-pointer"
        >
          Home
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
          const isLast = index === pathnames.length - 1;

          return (
            <div key={routeTo} className="flex items-center space-x-2">
              <span className="text-[#22BDB6]">•</span>
              {isLast ? (
                <span className="capitalize">{decodeURIComponent(name.replaceAll('-', ' '))}</span>
              ) : (
                <Link
                  to={routeTo}
                  className="capitalize hover:text-[#22BDB6] hover:underline transition-colors cursor-pointer"
                >
                  {decodeURIComponent(name.replaceAll('-', ' '))}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
