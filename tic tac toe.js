var choice = document.querySelectorAll(".choicecont")
var listpck = ["a","a","a","a","a","a","a","a","a"]
var listchc = ['<img src="o tictactoe.jpg" class = pick>', '<img src="x tictactoe.jpg" class = pick>']
var finish = document.querySelector(".notfin")

var nn
var indct
var chc = 1
var lstpk;
for(n of choice){
    n.addEventListener("click",function(e){
        nn = 0
        indct = 0

        for(n of choice){
            if(n == this){
                indct = nn
            }
            nn++
        }

        if(listpck[indct] == "a"){
            if(chc == 1){
                this.innerHTML = listchc[chc]
                this.firstElementChild.style.opacity = "1.0"
                listpck[indct] = chc
                chc = 0
            }
            else{
                this.innerHTML = listchc[chc]
                this.firstElementChild.style.opacity = "1.0"
                listpck[indct] = chc
                chc = 1     
            }
        }
        else{
            null
        }
        if((listpck[0]==1 && listpck[1]==1 && listpck[2]==1) || (listpck[0]==0 && listpck[1]==0 && listpck[2]==0)){
            if(listpck[0]==1 && listpck[1]==1 && listpck[2]==1){
                for(b in choice){
                    if (b == 0 || b== 1 || b == 2){
                        choice[b].innerHTML = '<img src = "x tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                }
            }
            else if(listpck[0]==0 && listpck[1]==0 && listpck[2]==0){
                for(b in choice){
                    if (b == 0 || b== 1 || b == 2){
                        choice[b].innerHTML = '<img src = "o tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                } 
            }
            draw = 1
            lstpk = 1
            finish.classList.remove("notfin")
            finish.classList.add("finish")
        }

        else if((listpck[3]==1 && listpck[4]==1 && listpck[5]==1) || (listpck[3]==0 && listpck[4]==0 && listpck[5]==0)){
            if(listpck[3]==1 && listpck[4]==1 && listpck[5]==1){
                for(b in choice){
                    if (b == 3 || b== 4 || b == 5){
                        choice[b].innerHTML = '<img src = "x tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                }
            }
            else if(listpck[3]==0 && listpck[4]==0 && listpck[5]==0){
                for(b in choice){
                    if (b == 3 || b== 4 || b == 5){
                        choice[b].innerHTML = '<img src = "o tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                } 
            }
            draw = 1
            lstpk = 1
            finish.classList.remove("notfin")
            finish.classList.add("finish")
        }

        else if((listpck[6]==1 && listpck[7]==1 && listpck[8]==1) || (listpck[6]==0 && listpck[7]==0 && listpck[8]==0)){
            if(listpck[6]==1 && listpck[7]==1 && listpck[8]==1){
                for(b in choice){
                    if (b == 6 || b== 7 || b == 8){
                        choice[b].innerHTML = '<img src = "x tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                }
            }
            else if(listpck[6]==0 && listpck[7]==0 && listpck[8]==0){
                for(b in choice){
                    if (b == 6 || b== 7 || b == 8){
                        choice[b].innerHTML = '<img src = "o tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                } 
            }
            draw = 1
            lstpk = 1
            finish.classList.remove("notfin")
            finish.classList.add("finish")
        }

        else if((listpck[0]==1 && listpck[3]==1 && listpck[6]==1) || (listpck[0]==0 && listpck[3]==0 && listpck[6]==0)){
            if(listpck[0]==1 && listpck[3]==1 && listpck[6]==1){
                for(b in choice){
                    if (b == 0 || b== 3 || b == 6){
                        choice[b].innerHTML = '<img src = "x tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                }
            }
            else if(listpck[0]==0 && listpck[3]==0 && listpck[6]==0){
                for(b in choice){
                    if (b == 0 || b== 3 || b == 6){
                        choice[b].innerHTML = '<img src = "o tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                } 
            }
            draw = 1
            lstpk = 1
            finish.classList.remove("notfin")
            finish.classList.add("finish")
        }

        else if((listpck[1]==1 && listpck[4]==1 && listpck[7]==1) || (listpck[1]==0 && listpck[4]==0 && listpck[7]==0)){
            if(listpck[1]==1 && listpck[4]==1 && listpck[7]==1){
                for(b in choice){
                    if (b == 1 || b== 4 || b == 7){
                        choice[b].innerHTML = '<img src = "x tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                }
            }
            else if(listpck[1]==0 && listpck[4]==0 && listpck[7]==0){
                for(b in choice){
                    if (b == 1 || b== 4 || b == 7){
                        choice[b].innerHTML = '<img src = "o tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                } 
            }
            draw = 1
            lstpk = 1
            finish.classList.remove("notfin")
            finish.classList.add("finish")
        }
        
        else if((listpck[2]==1 && listpck[5]==1 && listpck[8]==1) || (listpck[2]==0 && listpck[5]==0 && listpck[8]==0)){
            if(listpck[2]==1 && listpck[5]==1 && listpck[8]==1){
                for(b in choice){
                    if (b == 2 || b== 5 || b == 8){
                        choice[b].innerHTML = '<img src = "x tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                }
            }
            else if(listpck[2]==0 && listpck[5]==0 && listpck[8]==0){
                for(b in choice){
                    if (b == 2 || b== 5 || b == 8){
                        choice[b].innerHTML = '<img src = "o tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                } 
            }
            draw = 1
            lstpk = 1
            finish.classList.remove("notfin")
            finish.classList.add("finish")
        }

        else if((listpck[0]==1 && listpck[4]==1 && listpck[8]==1) || (listpck[0]==0 && listpck[4]==0 && listpck[8]==0)){
            if(listpck[0]==1 && listpck[4]==1 && listpck[8]==1){
                for(b in choice){
                    if (b == 0 || b== 4 || b == 8){
                        choice[b].innerHTML = '<img src = "x tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                }
            }
            else if(listpck[0]==0 && listpck[4]==0 && listpck[8]==0){
                for(b in choice){
                    if (b == 0 || b== 4 || b == 8){
                        choice[b].innerHTML = '<img src = "o tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                } 
            }
            draw = 1
            lstpk = 1
            finish.classList.remove("notfin")
            finish.classList.add("finish")
        }
        else if((listpck[2]==1 && listpck[4]==1 && listpck[6]==1) || (listpck[2]==0 && listpck[4]==0 && listpck[6]==0)){
            if(listpck[2]==1 && listpck[4]==1 && listpck[6]==1){
                for(b in choice){
                    if (b == 2 || b== 4 || b == 6){
                        choice[b].innerHTML = '<img src = "x tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                }
            }
            else if(listpck[2]==0 && listpck[4]==0 && listpck[6]==0){
                for(b in choice){
                    if (b == 2|| b== 4 || b == 6){
                        choice[b].innerHTML = '<img src = "o tictactoe red.jpg" class = pick2>'
                        choice[b].firstElementChild.style.opacity = "1.0";
                    }
                    else{
                    }
                } 
            }
            draw = 1
            lstpk = 1
            finish.classList.remove("notfin")
            finish.classList.add("finish")
        }
        else{
            draw = -1
        }

        for (hh of listpck){
            if(hh != "a"){
                lstpk = -1
            }
            else{
                lstpk = 0
                break
            }
        }

        if(draw ==-1 && lstpk == -1){
            finish.firstElementChild.innerText = "Draw";
            finish.classList.remove("notfin");
            finish.classList.add("finish");
        }
    })
}
