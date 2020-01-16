module.exports= (app) => {
app.get('/api/myJson', async(req,res)=>{
    myRes ={
              "totalproccessedarticles": "43 out of: 43",
              "totalproccessedskus": "292 out of: 292",
              "rejectedskus": {
                "duplicate": {
                  "articles": [],
                  "rows": []
                },
                "notFound": {
                  "skus": [],
                  "rows": []
                }},
                "rejectedarticles": {
                  "duplicate": {
                    "articles": [],
                    "rows": []
                  },
                  "noSkus": {
                    "articles": [
                      "1010570-12N-2"
                    ],
                    "rows": [
                      2
                    ]
                  }
                  
                },
                "unknownfailure": [],
                "fail": [],
                "sentproducts": {
                  "369486-03": {
                    "article": "369486-03",
                    "name": "Nova-90S-Bloc-White",}
                  },
                "success": [],
              };
    res.json(myRes);
})
}