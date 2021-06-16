/*!
 * Block Page v1.0.0
 * www.souza.inf.br/
 * Copyright (c) 2021, Souza Consultória Tecnologica
 */

function blockPage(create, info, sec, target, message, color, type, size, message_spinner){

    
    /** Verifica a ação a ser executada */
    if(create === true){

        var color_spinner = '';
        var color_alert = '';
        var spinner = '';
        var spinner_small = '';
        var spinner_size = '';
        var spinner_message = '';
            
        /** Verifica se o tipo de spinner foi informado */
        if(type === 'circle'){
    
            spinner =  'border';
    
            /** Verifica se o tamanho do spinner foi infromado */
            if(size == 'sm'){// Samll => pequeno
    
                spinner_small = 'spinner-border-sm';
    
            }else{
    
                spinner_size = 'style="width: 3rem; height: 3rem;"';
            }
    
        }else if(type === 'ball'){
    
            spinner =  'grow';
    
            /** Verifica se o tamanho do spinner foi infromado */
            if(size == 'sm'){// Samll => pequeno
    
                spinner_small = 'spinner-grow-sm';
    
            }else{
    
                spinner_size = 'style="width: 3rem; height: 3rem;"';
            }
        
    
        }else{//Spinner padrão
    
            spinner =  'grow';
    
            /** Verifica se o tamanho do spinner foi infromado */
            if(size == 'sm'){// Samll => pequeno
    
                spinner_small = 'spinner-grow-sm';
    
            }else{
    
                spinner_size = 'style="width: 3rem; height: 3rem;"';
            }       
        }
    
    
        /** Verifica se a cor foi informada */
        if(!color){
    
            color_spinner = 'text-primary';
            color_alert = 'alert-primary';
    
        }else{
    
            switch(color) {
                
                case 'blue':
                    
                    color_spinner = 'text-primary';
                    color_alert = 'alert-primary';
    
                  break;
    
                case 'grey':
                  
                    color_spinner = 'text-secondary';
                    color_alert = 'alert-secondary';
    
                  break;
    
                case 'green':
                  
                    color_spinner = 'text-success';
                    color_alert = 'alert-success';
    
                  break; 
                  
                  
                case 'red':
                  
                    color_spinner = 'text-danger';
                    color_alert = 'alert-danger';
    
                  break;  
                  
                  
                case 'yellow':
                  
                    color_spinner = 'text-warning';
                    color_alert = 'alert-yellow';
    
                  break; 
                  
                  
                case 'cyan':
                  
                    color_spinner = 'text-info';
                    color_alert = 'alert-info';
    
                  break; 
                  
                  
                case 'white':
                  
                    color_spinner = 'text-light';
                    color_alert = 'alert-light';
    
                  break;  
                  
                  
                case 'black':
                  
                    color_spinner = 'text-dark';
                    color_alert = 'alert-dark';
    
                  break; 
                  
                case 'random':
                  
                    /** Temas disponiveis */
                    var a = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
                    
                    /** Embaralha os temas */
                    var color_rand = shuffle(a);
    
                    /** Pega o primeiro item embaralhado */
                    color_spinner = 'text-'+color_rand[0];
    
                    /** Pega o primeiro item embaralhado */
                    color_alert = 'alert-'+color_rand[0];
    
                  break;                
    
    
                default:
                  
                    color_spinner = 'text-primary';
                    color_alert = 'text-primary';
              }
    
        }


        /** Verifica se um algo foi definido */
        if(target){

            /** Verifica se existe mensagem a ser informada */
            if(message){

                /** Verifica se a mensagem possui spinner para exibir */
                if(message_spinner === true){

                    spinner_message  = '<div class="spinner-'+spinner+' '+color_spinner+' '+spinner_small+'" '+spinner_size+' role="status">';
                    spinner_message += '    <span class="sr-only">Loading...</span>';
                    spinner_message += '</div>';                    
                }                

                /** Carrega a mensagem no algo informado */
                var div  = spinner_message;                
                    div += ' '+message;
  

            }else{

                /** Cria a div responsável em carregar o spinner+info */
                var div  = '<div class="spinner-'+spinner+' '+color_spinner+' '+spinner_small+'" '+spinner_size+' role="status">';
                    div += '   <span class="sr-only">Loading...</span>';
                    div += '</div>';

            } 
                
                
            /** Adiciona o spinner ao target */
            $(target).html(div);                

        }else{

            /** Verifica se existe mensagem a ser informada */
            if(message){


                /** Verifica se a mensagem possui spinner para exibir */
                if(message_spinner === true){

                    spinner_message  = '<div class="spinner-'+spinner+' '+color_spinner+' '+spinner_small+'" '+spinner_size+' role="status">';
                    spinner_message += '    <span class="sr-only">Loading...</span>';
                    spinner_message += '</div>';                    
                }

                
                /** Cria a div responsável em carregar o spinner+info */
                var div  = '<div id="spinner-block">';
                    div += '    <div class="spinner-box">';
                    div += '        <div class="alert '+color_alert+'" role="alert">';
                    div +=              spinner_message;
                    div += '  ' +            message;
                    div += '        </div>'; 
                    div += '    </div>'; 
                    div += '    <div class="blackout"></div>';//Background total na tela        
                    div += '</div>'; 

            }else{            
    
                /** Cria a div responsável em carregar o spinner+info */
                var div  = '<div id="spinner-block">';
                    div += '    <div class="spinner-box">';
                    div += '        <div class="spinner-'+spinner+' '+color_spinner+' '+spinner_small+'" '+spinner_size+' role="status">';
                    div += '            <span class="sr-only">Loading...</span>';
                    div += '        </div>';
                    div += '        <div class="spinner-txt">';
                    div +=              info;//Carrega a informação informada
                    div += '        </div>';
                    div += '    </div>';
                    div += '    <div class="blackout"></div>';//Background total na tela            
                    div += '</div>';

            }

            /** Adiciona o spinner na tela */
            $('body').append(div);

        }

        /** Verifica se o tempo de execução foi definido */
        if(parseInt(sec) > 0){

            setTimeout(function() { 

                $('div').remove('#spinner-block');
            }, sec);//Remove o item a partir dos segundos informados

        }        

    }else{

        $('div').remove('#spinner-block');
    }

}

/** Embaralha os elementos de uma array */
shuffle = function(v){
    for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
};