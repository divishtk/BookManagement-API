const express=require('express');

const app = express();
app.use(express.json())
//instead of exp.hson we can use body parser
/*const bodyparsress = require('body-parser');
app.use(bodyparsress.json());*/


//database
const database=require('./database');

app.get("/",(request,response)=>{


    return response.json({booksList:database.books})

})


app.get("/is/:ISBN",(request,response)=>{


    const getBooksTheoughID=database.books.filter((books)=>(books.ISBN ===request.params.ISBN));


        if(getBooksTheoughID.length==0){

            return response.json({error:`No Book Found Regarding id ${request.params.ISBN}`})
        }





    return response.json({booksList:getBooksTheoughID})

})








//to get the list of books based on languages


    app.get("/langOfBook/:language",(req, res)=>{


            const getLangFromUrl=req.params.language;

            const filterBookOnLang=database.books.filter((lang)=>(lang.langauge)===getLangFromUrl)

                if(filterBookOnLang.length==0){

                    return res.json({error:`No book Found Based om langauge ${getLangFromUrl}`});
                }

            return res.json({lang:filterBookOnLang});



            })



            //to get the list of books based on category

            app.get("/c/:cat",(req, res)=>{


                const getcat=req.params.cat;
    
                const filtercat=database.books.filter((c)=>(c.category.includes(getcat)))
    
                    if(filtercat.length==0){
    
                        return res.json({error:`No book Found Based on category ${getcat}`});
                    }
    
                return res.json({cat:filtercat});
    
    
    
                })






            //to get all authors
app.get("/authors/authors",(request,response)=>{


    return response.json({author:database.authors})

})







        //to get specific authors  based on id 
        app.get("/authors/:authid",(request,response)=>{


            const getAuthBasedOnId=database.authors.filter((auth)=>(auth.id==request.params.authid));
        
        
                if(getAuthBasedOnId.length==0){
        
                    return response.json({error:`No Author Found Regarding id ${request.params.authid}`})
                }
        
        
        
        
        
            return response.json({getauthOnID:getAuthBasedOnId})
        
        })

                //to get specific authors  based on name



                app.get("/authorsName/:authName",(request,response)=>{


                    const getAuthBasedOnname=database.authors.filter((auth)=>(auth.name==request.params.authName));
                
                
                        if(getAuthBasedOnname.length==0){
                
                            return response.json({error:`No Author Found Regarding name ${request.params.authName}`})
                        }
                
                
                
                
                
                    return response.json({getBookBasedOnName:getAuthBasedOnname})
                
                })




                                //to get all authors  based on books
                                app.get("/auth/book/:book",(request,response)=>{


                                    const authors =request.params.book;

                                    const getAuth=database.authors.filter((a)=>a.books.includes(authors));

                                    if(getAuth.length==0){
                
                                        return response.json({error:`No Author Found Regarding Book ${authors}`})
                                    }

                                    return response.json({authorname:getAuth})


                                })

            


                                    //Publications
                                    //to get all publications




                                    app.get("/publications",(request,response)=>{


                                        return response.json({publication:database.publications})
                                    
                                    })



                             //to get specific publications



                             app.get("/publications/:pubid",(request,response)=>{


                                const getPublications=database.publications.filter((publication)=>(publication.id==request.params.pubid))


                                    if(getPublications.length==0){
                                        return response.json({error:"No Specific Publication Found"})
                                    }

                                return response.json({publicationsId:getPublications})
                            
                            })


                                    
                                    
                             //to get list of specific publications based on books ISBN
                             app.get("/publication/:isbn", (req, res) => {
                              const getSpecificPublications = database.publications.filter((publication) =>
                                  publication.books.includes(req.params.isbn)
                                ); 
                              
                        
                              
                                if (getSpecificPublications.length==0) {
                                  return res.json({
                                    error: `No Publication found for the book ${req.params.isbn}`,
                                  });
                                }
                              
                                return res.json({ publicationss: getSpecificPublications });
                              });
                              









                              //Postman Testing 

                              app.post("/test/data",(request,response)=>{


                                response.send("Hello PostMan Haha");
                                console.log(request.body);


                              });

                            





                              //Route-->   /book/add/
                              //Desc -->add new book 
                              //methods-->Post (To add data)

                                app.post("/book/add",(request,response)=>{
                                    console.log(request.body);
                                    const {newBook} =request.body;
                                    database.books.push(newBook);
                                    return response.json({books:database.books});

                                        /*
                                          /*"ISBN": "12345Book",
        "title": "Getting Started With JS",
        "pub_date": "2021-07-07",
        "langauge": "en",
        "no_of_pages": 300,
        "authors": [
            1
        ],
        "category": [
            "Tech",
            "Programmming",
            "Science"
        ],
        "publications": 1*/
                                        
                                });


                                
                              //Route-->   /author/add/
                              //Desc -->add new author 
                              //methods-->Post (To add data)

                              app.post("/author/add",(request,response)=>{
                                console.log(request.body);
                                const {newAuthor} =request.body;
                                database.authors.push(newAuthor);
                                return response.json({author:database.authors});


                                    /*
                                    
                                    {
    "newAuthor": {
        "id": 9,
        "name": "Takshashila K",
        "books": []
    }
}


                                    */

                              })


                                            
                              //Route-->   /publication/add/
                              //Desc -->add new pubication 
                              //methods-->Post (To add data)


                              app.post("/publications/add",(req, res)=>{

                                const {newPub}=req.body;

                                database.publications.push(newPub);

                                return res.json({newpub:database.publications})




                              })



                                   //Route-->   /book/update/title
                              //Desc -->update book title
                              //methods-->Put (To add data)


                              app.put("/book/update/title/:isbn",(request,response)=>{


                                    database.books.forEach((book)=>{

                                        const isbn = request.params.isbn;
                                        if(isbn===book.ISBN){
                                         book.title = request.body.newBooktitle;

                                            return ;
    
                                        }
    


                                    })
                                   
                                    return response.json({title:database.books})




                              })



app.listen(3000)