import React, { Component } from 'react';
import '../css.scss'

class App extends Component {
  
  calAge =(date)=>{
    
    let today = new Date();
    let inputDate = new Date(document.getElementById("date").value);
    let birthMonth,birthDate,birthYear;
    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    if(
        birthDetails.year > currentYear ||
        ( birthDetails.month > currentMonth && birthDetails.year === currentYear) || 
        (birthDetails.date > currentDate && birthDetails.month === currentMonth && birthDetails.year === currentYear)
    ){
        alert("Not Born Yet");
        return;
    }

    birthYear = currentYear - birthDetails.year;

    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }
    else{
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        let months = [31,28,31,30,31,30,31,31,30,31,30,31];
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }
    return `${birthYear} years ${birthMonth} months ${birthDate} Days old.`
  }


  render() { 
    return (
      <div>
        <h4> You are {this.calAge(this.props.date)} </h4>
      </div>
    );
  }
}
 
export default App;