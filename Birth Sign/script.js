//if the button was clicked
function myFunction(){

    var month1 = prompt("Enter the Birth Month:");
    var day1 = prompt("Enter the Birth Day:");
    var year1 = prompt("Enter the Birth Year:");
    
    var month = parseInt(month1);
    var day = parseInt(day1);
    var year = parseInt(year1);
    
    var birth_stone, birth_flower, zodiac_sign, zodiac_sign_determinator, astrological_sign, month_name;
    var checker, leapyear;
    
    //To determine whether it is a leap year or not
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        leapyear = true;
     }else{
        leapyear = false;
         }
        
    //To test whether the input is valid or not
    if (year <= 0 || month <= 0 || month > 12 || day <= 0 || day > 31 || (leapyear == false && month == 2 && day > 28) || 
        (leapyear == true && month == 2 && day > 29) || ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30)){
        checker = false;
    }
    else{
    checker = true;
    }

    if(checker){
        //To determine the chinese zodiac sign
        if (year >= 4){
            zodiac_sign_determinator = (year - 4) % 12;
        }else{
            zodiac_sign_determinator = (4 - year);
        }

        switch(zodiac_sign_determinator){
            case 0: zodiac_sign = "Rat"; break;
            case 1: zodiac_sign = "Ox"; break;
            case 2: zodiac_sign = "Tiger"; break;
            case 3: zodiac_sign = "Rabbit"; break;
            case 4: zodiac_sign = "Dragon"; break;
            case 5: zodiac_sign = "Snake"; break;
            case 6: zodiac_sign = "Horse"; break;
            case 7: zodiac_sign = "Goat"; break;
            case 8: zodiac_sign = "Monkey"; break;
            case 9: zodiac_sign = "Rooster"; break;
            case 10: zodiac_sign = "Dog"; break;
            default: zodiac_sign = "Pig"; break;
        }

        //To determine the astrological sign, birth stone, and birth flower
        switch (month){
            case 1: //January
                month_name = "January";
                birth_stone = "Garnet";
                birth_flower = "Carnation";
                if (day <= 20){astrological_sign = "Capricorn";}
                else{astrological_sign = "Aquarius";}
            break;

            case 2: //February
                month_name = "February";
                birth_flower = "Violet";
                if(day <= 19){astrological_sign = "Aquarius";}
                else{astrological_sign = "Pisces"}
            break;

            case 3: //March
                month_name = "March";
                birth_stone = "Aquamarine";
                birth_flower = "Jonquil";
                if(day <= 20){astrological_sign = "Pisces";}
                else{astrological_sign = "Aries";}
            break;

            case 4: //April
                month_name = "April";
                birth_stone = "Diamond";
                birth_flower = "Sweet Pea";
                if(day <= 19){astrological_sign = "Aries";}
                else{astrological_sign = "Taurus";}
            break;

            case 5: //May
                month_name = "May";
                birth_stone = "Emerald";
                birth_flower = "Lily of the Valley";
                if(day <= 20){astrological_sign = "Taurus";}
                else{astrological_sign = "Gemini";}
            break;

            case 6: //June
                month_name = "June";
                birth_stone = "Pearl";
                birth_flower = "Rose";
                if(day <= 21){astrological_sign = "Gemini";}
                else{astrological_sign = "Cancer";}
            break;

            case 7: //July
            month_name = "July";
                birth_stone = "Ruby";
                birth_flower = "Larkspur";
                if(day <= 21){astrological_sign = "Cancer";}
                else{astrological_sign = "Leo";}
            break;

            case 8: //August
                month_name = "August";
                birth_stone = "Peridot";
                birth_flower = "Gladiola";
                if(day <= 21){astrological_sign = "Leo";}
                else{astrological_sign = "Virgo";}
            break;

            case 9: //September
                month_name = "September";
                birth_stone = "Sapphire";
                birth_flower = "Aster";
                if(day <= 22){astrological_sign = "Virgo";}
                else{astrological_sign = "Libra";}
            break;

            case 10: //October
                month_name = "October";
                birth_stone = "Opal";
                birth_flower = "Calendula";
                if(day <= 22){astrological_sign = "Libra";}
                else{astrological_sign = "Scorpio";}
            break;

            case 11: //November
                month_name = "November";
                birth_stone = "Topaz";
                birth_flower = "Chrysanthemum";
                if(day <= 21){astrological_sign = "Scorpio";}
                else{astrological_sign = "Sagittarius";}
            break;

            case 12: //December
                month_name = "December";
                birth_stone = "Turquoise";
                birth_flower = "Narcissus";
                if(day <= 21){astrological_sign = "Sagittarius";}
                else{astrological_sign = "Capricorn";}
            break;

            default: document.write("Invalid Input of Month" + "<br>"); break;
        }
       
        var str1 = month_name;
        var str2 = day1;
        var str3 = year1;
        var space = " ";
        var comma = ",";
        var res = str1.concat(space, str2, comma, space, str3);
        document.getElementById("birthday").innerHTML = res;
        document.getElementById("astrological-sign").innerHTML = astrological_sign;
        document.getElementById("chinese-zodiac").innerHTML = zodiac_sign;
        document.getElementById("birth-stone").innerHTML = birth_stone;
        document.getElementById("birth-flower").innerHTML = birth_flower;
    }else{
        alert("Try Again. Please enter a valid input");
    }
}
