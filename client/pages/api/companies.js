const companies = [
  { 
    name: 'lightricks', 
    site: 'https://www.lightricks.com', 
    icon: 'https://www.lightricks.com//favicon.ico', 
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
  }, { 
    name: 'talkspace', 
    site: 'https://www.talkspace.com', 
    icon: 'https://www.talkspace.com/favicon.ico',
    interview: [
      { 
        stage: 'phone interview', 
        questions: [
          'Tell me about yourself?',
          'Tell me about the last 3 jobs you had, and why you leave them?'
        ] 
      },
      { 
        stage: 'zoom interview ( R&D manager and product manager )', 
        questions: [
          'Tell me about yourself?',
          'Tell me about some big feature you make, what the architecture? data flow ? etc..',
          'What is nodejs ? how its diffrent from other servers ? what are the pros and cons ?',
          'code: \n console.log(1);\nsetTimeout(() => console.log(2), 0);\nconsole.log(3); \n\n what is the log order and why ?  ',
          'code: \n write function \'foo\' that calc multicplication of two numbers: foo(3)(4) => 18',
          '** In general they ask about almost any technologie that i mention in the inteview'
        ] 
      }
    ]
  }
];
export default (req, res) => {
  res.statusCode = 200;
  res.json(companies);
}
