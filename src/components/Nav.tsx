import { useLocation, Link } from 'react-router-dom';

const Nav = () => {
  const currentPage: string = useLocation().pathname;
  return (
    <nav className="nav justify-content-center">
      <div className="nav-item">
        <Link to="/"
        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
          Home
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/SavedCandidates"
        className={currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}>
          Potential Candidates
        </Link>
      </div>
    </nav>
  )
};

export default Nav;
