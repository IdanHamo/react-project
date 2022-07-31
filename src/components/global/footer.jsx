const Footer = () => {
  return (
    <div className="container text-center">
      <img className="footer-img d-inline" src="images/footer.png" alt="logo" />
      <span>{new Date().getFullYear()} &copy;</span>
    </div>
  );
};

export default Footer;
