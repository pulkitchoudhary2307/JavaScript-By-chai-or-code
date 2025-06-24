const course = {
    courseName : "Java Script by Chai or Code",
    price : "199",
    courseInstruter : "Hitesh Choudhary"
}

// course.courseInstruter

const {courseInstruter} = course
console.log (courseInstruter)//Hitesh

const {courseInstruter : Instruter} = course
console.log (courseInstruter)//Hitesh
console.log (Instruter) //Hitesh
