// CODE here for your Lambda Classes

class Person {

  constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }

  introduction() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
  }

}

class Instructor extends Person {

  constructor(instructorAttributes) {
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }

  changeGrade(student, grade) {
    let newGrade = this.grade*(math.Random());
    return `${student.name}'s new grade is ${newGrade}'`
  }

}

class Student extends Person {

  constructor(studentAttributes) {
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
    this.grade = 92;
  }

  listsSubjects() {
    console.log(`${student.favoriteSubjects}`)
  }

  PRAssignment(subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`)
  }

  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`)
  }

  graduate(student, newGrade) {
    if (newGrade > 70) {
      return `${student.name} graduated!`
    }
    else {
      changeGrade(student, grade)
    }
  }
}

class ProjectManager extends Instructor {

  constructor(pmAttributes) {
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standup time!`)
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}
