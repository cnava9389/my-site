import '../index.css'
const Navbar = (props) => {
  return (
    <div>
      <nav class="navbar nav-stick navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#me">
            Me
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#python">
                  Python
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#js">
                  Java/TypeScript
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#code"
                  tabindex="-1"
                  aria-disabled="true"
                  >
                  Code
                </a>
              </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
