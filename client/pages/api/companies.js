const companies = [
  { 
    name: 'lightricks', 
    site: 'https://www.lightricks.com', 
    icon: 'https://www.lightricks.com//favicon.ico', 
    interview: [
      { 
        stage: 'phone interview', 
        questions: [
          'tell me about yourself?',
          'tell me about the last 3 jobs you had, and why you leave them?'
        ] 
      }
    ]
  }, { 
    name: 'talkspace', 
    site: 'https://www.talkspace.com', 
    icon: 'https://www.talkspace.com/favicon.ico', 
    interview: [
      { 
        stage: 'phone interview', 
        questions: [
          'what is session cookie and localStorage, what the difference  between them?',
          'what is arrow function how its difference  from regular function?',
          'what is promise?',
          'what html DOCTYPE means?',
          'what the keywords \'let\' \'const\' \'var\' means, what the difference  between them?',
          'what async await keywords meaning? how and when we use them?',
        ] 
      }
    ]
  }
];
export default (req, res) => {
  res.statusCode = 200
  res.json(companies)
}
