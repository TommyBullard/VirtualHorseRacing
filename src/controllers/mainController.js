exports.getHomePage = (req, res) => {
  res.render('pages/home', {
    title: 'Home Page',
    user: req.user // Example dynamic data
  });
};

exports.getAboutPage = (req, res) => {
  res.render('pages/about', { title: 'About Us' });
};