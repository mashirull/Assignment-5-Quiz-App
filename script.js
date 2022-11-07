$(document).ready(function(){
    $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/quiz',function(data,status){
        // console.log(status)
        // console.log(data)
        for(m=0;m<data.length;m++){
        
            // console.log(data[m])
            var quiz_div = document.createElement('div')
            quiz_div.classList.add('quiz_box')
            
            for(i in data[m]){
                if(i==='question'){
                    var h2_tag= document.createElement('h2')
                    h2_tag.classList.add('question')
                    var que_text = document.createTextNode('Q.'+(m+1)+" "+data[m][i]);
                    h2_tag.appendChild(que_text)
                    quiz_div.appendChild(h2_tag)
                }
                
                else if(i==='options'){
                    // console.log(i)
                    for(z=0;z<data[m][i].length;z++){
                        // console.log(data[m][i][z])
                        var options = data[m][i][z];
                        var radio_input = document.createElement('input')
                        radio_input.type = 'radio';
                        radio_input.id = 'option'+z+(m+1)
                        radio_input.value = z+1
                        radio_input.name = 'question'+(m+1)

                        var input_lable = document.createElement('lable')
                        input_lable.setAttribute('for',`option${z}${m+1}`)
                        var label_text = document.createTextNode(options)
                        input_lable.appendChild(label_text)

                        var br_tag = document.createElement('br')
                        var br_tag2 = document.createElement('br')
                        // console.log(input_lable)
                        quiz_div.appendChild(radio_input)
                        quiz_div.appendChild(input_lable)
                        quiz_div.appendChild(br_tag)
                        quiz_div.appendChild(br_tag2)

                    }

                }
            }
            

            var quiz_container = document.querySelector('.quiz_container')
            quiz_container.appendChild(quiz_div)
            
        }


        
        $('#btn').click(function(){
            // alert('clicked')
            var selected = []
            var ans = []
            for (n=0;n<data.length;n++){
                var name = "question"+(n+1)
                var select_val= $("input[name= " + name + "]:checked").val();
                selected.push(select_val)
                ans.push(data[n].answer)   
            }
            console.log(selected)
            console.log(ans)
            var score = 0
            for(d=0;d<selected.length;d++){
             for(d=0;d<ans.length;d++){
                if(selected[d] == ans[d]){
                    score++
                }
                
             }   
            }
            var marks = document.getElementById('score')
            marks.innerHTML = score + "/5"
             if(score==0){
                $('.score_bord').css('background-color','red')
             }
             else if(score==selected.length){
                $('.score_bord').css('background-color','green')
             }
            
        })
        
        
    })


    
    // var names = "option" + g[i].id;
    // selected.push($("input[name= " + names + "]:checked").val());

    // var submit_btn = document.getElementById('btn');
    // console.log(submit_btn)


    





















})