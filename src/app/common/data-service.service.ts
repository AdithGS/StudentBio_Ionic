import { Injectable } from '@angular/core';
//interface for student
export interface Student{
  id:Number,
  name:String,
  email:String,
  contactNumber:Number
}
//interface for mark

export interface Mark{
id:number,
courseId:string,
studentId:string,
examDateAndTime:Date,
marksObtained:number,
maximumMarks:number
}
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  studentList:Student[] = [
    {id:1,name:"adith",email:"test@mail.com",contactNumber:815910324},
    {id:2,name:"abi",email:"abin@mail.com",contactNumber:9854726548},
    {id:2,name:"abi",email:"abin@mail.com",contactNumber:9854726548},
    {id:2,name:"abi",email:"abin@mail.com",contactNumber:9854726548},
    {id:2,name:"abi",email:"abin@mail.com",contactNumber:9854726548},
    {id:2,name:"abi",email:"abin@mail.com",contactNumber:9854726548},
  ]
  constructor() { }
  
  addStudent(student:Student){
    this.studentList.push(student)
  }
  getStudent(){
    return this.studentList
  }

}
