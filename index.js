const express = require('express')
const Joi =require('joi');
const app =express()

app.use(express.json())

const PORT = enviroment_env.PORT || 3000

app.listen(PORT,()=> console.log(`server running on ${PORT}`))

const courses=[{id:1,name:"fre"},
{id:1,name:"fre"},
{id:1,name:"fre"},
]
app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.get('/api/courses/:id',(req,res)=>{
   const course=  course.find(c=>c.id === parseInt(req.params.id))
if(!course) res.status(400).send(`course not found`)
res.send(course)
})


app.post('/api/courses',(req,res)=>{
    const schema ={
        name:Joi.string().min(4).required()
    };

    const result = Joi.validate(req.body,schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message)
        return 
    }
    const course ={
        id:courses.length+1,
        name:req.body.name

    }
    courses.push(course)
})


   app.put('/api/courses/:id'),(req,res){
       const course = courses.find(c=>c.id===parseInt(req.param.id));
       if(!course){
           res.status(404).send(`the course with the given id dosent exist `)
       }
       
       const {error} = validateCourse(req.body)
       const schema ={
        name:Joi.string().min(4).required()};

    if(result.error){
                 res.status(400).send(result.error.details[0].message)
        return
   }

   course.name = req.body.name;
   res.send(course);


   app.delete('/api/courses/:id',(req,res)=>{
       const cours = courses.find(c=>c.id===parseInt(req.id))
       if(!course) return res.status(404).send('the course with the given id dosent exist ')
       const index = courses.indexOf(course)
       courses.splice(index,1)
       res.send(course)
   })

   function validateCourse(course ){
    const schema ={
        name:Joi.string().min(4).required()
    };

   return  Joi.validate(course,schema);  

   }