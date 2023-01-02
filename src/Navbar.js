//  stateless functional component
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        {/* we can also add dynamic styling, we will be passing a object inside a curly brace and setting styles properties
        in camel case */}
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
