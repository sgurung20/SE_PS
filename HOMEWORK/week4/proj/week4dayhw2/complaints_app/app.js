const APP_TOKEN = "3nMPlHyMofEykN2kh1YXuq6vz";
const NYPD_AGENCY = "New York City Police Department";
const BOROUGHS = ["BROOKLYN", "MANHATTAN", "QUEENS", "STATEN ISLAND", "BRONX"];
const NUM_OF_BOROUGH_DIVS = BOROUGHS.length
let backgroundColors = ["green", "blue", "red", "orange", "purple"];
const MY_URL = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?";
const DEFAULT_LIMIT = 10;

$(() => {
    $("body").css({
    "background-color" : "lightgrey"
    });
    $("h2").css({
    "font-size" : "2rem",
    "text-transform" : "capitalize"
    })
    $(".boroughDiv").append('<button class="getAnswers">');
    $(".getAnswers").text("check");
    $(".getAnswers").css({
        "height" : "4rem",
        "width" : "8rem",
        "color" : "white",
        "font-size" : "1.5rem",
        "font-weight" : "bolder",
        "text-transform" : "capitalize",
        "background" : "rgba(0,0,0,0.25)",
        "cursor" : "pointer"
    });
    $(".paragraphDiv").append('<button class="closeResults">')
    $(".closeResults").css({
            "height" : "2rem",
            "width" : "5rem",
            "display" : "none"
    })
    $(".closeResults").html("Close");
  
  // add right margin and different BG color styling to every borough div

    backgroundColors.forEach((item, index) => {
        $(".boroughDiv").eq(index).css({
            "background-color" : item,
            "margin-right" : "50%"
        })
    })

// prevent default on every button and add input field after every h2 tag

    for(let i = 0; i < NUM_OF_BOROUGH_DIVS; i++) {
        let userInput;
        let paragraphStyle;
        $(".getAnswers").eq(i).on("submit", (e) => {
            e.preventDefault();
        })
        $("h2").eq(i).append("<input>");
        $(".closeResults").eq(i).click(() => {
            $("p").eq(i).html("");
            $("p").eq(i).css({
                "width" : "0",
                "background" : "none",
                "margin" : "0",
                "padding" : "0"
        })
            $(".closeResults").eq(i).css({
                "display" : "none"
            })
        })
        // query each borough with specific information and display it in div when button is pressed
        $(".getAnswers").eq(i).click(()=>{
            userInput = parseInt($("input:text").eq(i).val());
            paragraphStyle = 
                $("p").eq(i).css({
                    "width" : "50%",
                    "background" : "lightblue",
                    "margin" : "1rem",
                    "padding" : "1rem"
                });
            if(typeof userInput === "number" && isNaN(userInput) === false) {
                $.ajax({
                    url: MY_URL,
                    type: "GET",
                    data: {
                        "$limit" : userInput,
                        "$$app_token" : APP_TOKEN,
                        "agency_name" : NYPD_AGENCY,
                        "borough" : BOROUGHS[i]
                    }
                }).done((data) => {
                    $("p").eq(i).html("");
                    paragraphStyle;
                    $(".closeResults").eq(i).css({
                        "display" : "block"
                    })
                    for (let j = 0; j < userInput; j ++) {
                        $("p").eq(i).append(`${data[j].borough}: Compalint: ${data[j].complaint_type} - ${data[j].descriptor} Rsolution: ${data[j].resolution_description}\n`);
                        console.log(data[j].borough);
                    }
                    console.log(data);
                }) 
            } else /* if ($("input:text").eq(i).val("0") || isNaN(userInput) === true) */ {
                $.ajax({
                    url: MY_URL,
                    type: "GET",
                    data: {
                        "$limit" : DEFAULT_LIMIT,
                        "$$app_token" : APP_TOKEN,
                        "agency_name" : NYPD_AGENCY,
                        "borough" : BOROUGHS[i]
                    }
                }).done((data) => {
                    $("p").eq(i).html("");
                    paragraphStyle;
                    $(".closeResults").eq(i).css({
                        "display" : "block"
                    })
                    for (let j = 0; j < DEFAULT_LIMIT; j ++) {
                        $("p").eq(i).append(`${data[j].borough}: Compalint: ${data[j].complaint_type} - ${data[j].descriptor} Rsolution: ${data[j].resolution_description}\n`);
                        console.log(data[j].borough);
                    }
                    console.log(data);
                });
            }
        })
    }
    $("input:text").css({
        "margin-left" : "1rem"
    })
    $("input:text").attr("placeholder", "Type your number here");
})
