import { Link, useNavigate } from 'react-router-dom';
import WriteIcon from './icons/WriteIcon';
import ProfileBox from './ProfileBox';
import Search from './Search';

interface AppbarProps {
  skipAuthCheck?: boolean;
  pageActions?: JSX.Element;
  hideWriteAction?: boolean;
}

export const Appbar = ({ skipAuthCheck = false, pageActions, hideWriteAction = false }: AppbarProps) => {
  const navigate = useNavigate();
  const isUserLoggedIn = localStorage.getItem('token');

  if (!isUserLoggedIn && skipAuthCheck == false) {
    navigate('/signin');
  }
  return (
    <div className="flex justify-between items-center p-4 md:px-16 bg-blue">
      <div className="flex justify-center items-center gap-4">
        <Link to="/" className="text-xl font-light">
        <span className="text-white">Blogi</span><span className="text-white">AI</span><span className="text-green-700">n</span>
        </Link>
        <Search />
      </div>

      <div className="flex items-center gap-1">
        

        {isUserLoggedIn ? (
          <>
            {hideWriteAction === false && (
              <Link to="/publish">
                <button
                  type="button"
                  className="focus:outline-none hover:bg-gray-100 rounded-3xl focus:ring-4 focus:ring-gray-100 font-medium flex items-center gap-2 text-sm px-5 py-2.5 text-white hover:text-black"
                >
                  <WriteIcon /> Write
                </button>
              </Link>
            )}
            {pageActions}
            <div className="ml-4">
              <ProfileBox />
            </div>
          </>
        ) : (
          <div className="ml-4">
            <Link
              to="/signup"
              className="focus:outline-none border border-gray-700 hover:bg-gray-800 hover:text-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 bg-white text-black"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="ml-4 focus:outline-none border border-gray-700 hover:bg-gray-800 hover:text-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 bg-white text-black"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appbar;
