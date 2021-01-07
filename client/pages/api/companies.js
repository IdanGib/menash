const companies = [
  { 
    name: 'talkspace', 
    site: 'https://www.talkspace.com', 
    icon: 'https://www.talkspace.com/favicon.ico', 
    interview: {} }
];
export default (req, res) => {
  res.statusCode = 200
  res.json(companies)
}
