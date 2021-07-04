const books = [
    {
      ISBN: "12345Book",
      title: "Getting Started With Mern",
      pub_date: "2021-07-07",
      langauge: "en",
      no_of_pages: 300,
      authors: [1, 2],
      category: ["Tech", "Programmming", "Science"],
      publications: 1
    },
    {
        ISBN: "123Book",
        title: "Getting Started With JAVA",
        pub_date: "2021-07-07",
        langauge: "en",
        no_of_pages: 300,
        authors: [1, 2,3],
        category: ["Technology", "Science"],
        publications: 2
      }
  ];
  
  const authors = [
    {
        id: 1,
        name: "Divisht K",
        books: ["12345Book","NewBook"]
    },
    {
      id: 2,
      name: "Elon Mask",
      books: ["12345Book"]
    }
  ];
  
  const publications = [
    {
      id: 1,
      name: "WriteX",
      books: ["12345Book"],
    },
    {
      id: 2,
      name: "TechMax",
      books: ["12345Book"],
    },
    {
      id: 32,
      name: "LOLA",
      books: ["123book"],
    }
  ];

  module.exports ={books,authors,publications}