const express=require('express');

const app = express();



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

            




app.listen(3000)