p1_name = localStorage.getItem("player1_name");
p2_name = localStorage.getItem("player2_name");

p1_score = 0;
p2_score = 0;

document.getElementById("player1_name").innerHTML = p1_name + ":";
document.getElementById("player2_name").innerHTML = p2_name + ":";

document.getElementById("player_question").innerHTML = "question turn -" + p1_name;
document.getElementById("player_answer").innerHTML = "answer turn -" + p2_name;

function send(){
    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='input_c_box'>";
    check_btn = "<br><br><button class='btn btn-into' onclick='check()'>Check</button>";
    row = question_number + input_box + check_btn;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player1_name";
answer_turn = "player2_name";

function check(){
    get_answer = document.getElementById("input_c_box").value;

    if(get_answer == actual_answer){
        if(answer_turn == "player1_name"){
            update_player1_score = p1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else{
            update_player2_score = p2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;  
        }
    }

    if(question_turn == "player1_name"){
        question_turn = "player2_name";
        document.getElementById("player_question").innerHTML = "Question Turn - " + p2_name;
    }
    else{
        question_turn = "player1_name";
        document.getElementById("player_question").innerHTML = "Question Turn - " + p1_name; 
    } 

    if(answer_turn == "player1_name"){
        answer_turn = "player2_name";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + p2_name;
    }
    else{
        answer_turn = "player1_name";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + p1_name; 
    } 
    document.getElementById("output").innerHTML = "";
}