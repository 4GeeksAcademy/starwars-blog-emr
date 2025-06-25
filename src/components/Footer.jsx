export const Footer = () => (
  <footer className="footer mt-auto py-3 bg-dark">
    <div className="container text-center text-white"> 
      <p className="mb-2">
        <span className="d-block">⭐ Made with the Power of the</span>
        <span className="d-block">
          <strong>Dark Side</strong>
          <span className="text-white-50"> (and too much café)</span> 
        </span>
      </p>
      <div className="mt-2">
        <small className="text-white-50">
          © {new Date().getFullYear()} - This is the footer you're looking for
        </small>
      </div>
    </div>
  </footer>
)