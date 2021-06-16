<html>

    <head>
        <title>Block</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link href="css/block.css" rel="stylesheet" type="text/css">
        <script src="js/jquery.min.js"></script>
        <script src="js/block.js"></script>

    </head>

    <body>

        <div class="btn-exemple">

            <button class="btn btn-primary" onclick="blockPage(true, 'Aguarde', 2000, '', '', 'random', 'circle')">Spinner Circle Randômico</button>
            <button class="btn btn-primary" onclick="blockPage(true, 'Aguarde', 2000, '', '', 'random', 'ball')">Spinner Ball Randômico</button>
            <button class="btn btn-primary" onclick="blockPage(true, '       ', 2000, '', '', 'random', 'ball')">Sem mensagem Randômico</button>
            <button class="btn btn-primary" onclick="blockPage(true, '', 2000, '#spinner')">Target</button>
            <button class="btn btn-success" onclick="blockPage(true, '', 2000, '#spinner', '', 'random', 'ball', 'sm')">Target ball pequeno random</button>
            <button class="btn btn-success" onclick="blockPage(true, '', 2000, '#spinner', '', 'random', 'circle', 'sm')">Target circle pequeno random</button>
            <button class="btn btn-dark" onclick="blockPage(true, '', 2000, '#spinner', 'Carregando dados...', 'random', 'ball', '', true)">Target Message ball random</button>            
            <button class="btn btn-dark" onclick="blockPage(true, '', 2000, '#spinner', 'Carregando dados...', 'random', 'ball', 'sm', true)">Target Message pequeno ball random</button>
            <button class="btn btn-dark" onclick="blockPage(true, '', 2000, '#spinner', 'Carregando dados...', 'random', 'circle', '', true)">Target Message circle random</button>            
            <button class="btn btn-dark" onclick="blockPage(true, '', 2000, '#spinner', 'Carregando dados...', 'random', 'circle', 'sm', true)">Target Message pequeno circle random</button>            
            <button class="btn btn-primary" onclick="blockPage(true, '', 2000, '', '', 'blue')">Sem mensagem blue</button>
            <button class="btn btn-primary" onclick="blockPage(true, '', 2000, '', '', 'grey')">Sem mensagem grey</button>
            <button class="btn btn-primary" onclick="blockPage(true, '', 2000, '', '', 'green')">Sem mensagem green</button>
            <button class="btn btn-primary" onclick="blockPage(true, '', 2000, '', '', 'red')">Sem mensagem red</button>
            <button class="btn btn-primary" onclick="blockPage(true, '', 2000, '', '', 'yellow')">Sem mensagem yellow</button>
            <button class="btn btn-primary" onclick="blockPage(true, '', 2000, '', '', 'cyan')">Sem mensagem cyan</button>
            <button class="btn btn-primary" onclick="blockPage(true, '', 2000, '', '', 'white')">Sem mensagem white</button>
            <button class="btn btn-primary" onclick="blockPage(true, '', 2000, '', '', 'black')">Sem mensagem black</button>
            <button class="btn btn-primary" onclick="blockPage(true, '', 2000, '', '', 'random')">Sem mensagem random</button>
            <button class="btn btn-danger" onclick="blockPage(true, '', 2000, '', '', 'random', 'circle', 'sm')">Circle random pequeno</button>
            <button class="btn btn-danger" onclick="blockPage(true, '', 2000, '', '', 'random', 'ball', 'sm')">Ball random pequeno</button>
            <button class="btn btn-info" onclick="blockPage(true, '', 2000, '#spinner', '', 'random', 'circle', 'sm')">Circle random pequeno target</button>
            <button class="btn btn-info" onclick="blockPage(true, '', 2000, '#spinner', '', 'random', 'ball', 'sm')">Ball random pequeno target</button>
            <button class="btn btn-warning" onclick="blockPage(true, '', 2000, '', 'Carregando dados...', 'random')">Apenas mensagem random</button>
            <button class="btn btn-warning" onclick="blockPage(true, '', 2000, '', 'Carregando dados...', 'blue')">Apenas mensagem blue</button>
            <button class="btn btn-warning" onclick="blockPage(true, '', 2000, '', 'Carregando dados...', 'red')">Apenas mensagem red</button>
            <button class="btn btn-warning" onclick="blockPage(true, '', 2000, '', 'Carregando dados...', 'green')">Apenas mensagem green</button>
            <button class="btn btn-secondary" onclick="blockPage(true, '', 2000, '', 'Carregando dados...', 'random', 'ball', 'sm', true)">Mensagem random spinner ball pequeno</button>
            <button class="btn btn-secondary" onclick="blockPage(true, '', 2000, '', 'Carregando dados...', 'random', 'ball', '', true)">Mensagem random spinner ball grande</button>
            <button class="btn btn-success" onclick="blockPage(true, '', 2000, '', 'Carregando dados...', 'random', 'circle', 'sm', true)">Mensagem random spinner circle pequeno</button>
            <button class="btn btn-success" onclick="blockPage(true, '', 2000, '', 'Carregando dados...', 'random', 'circle', '', true)">Mensagem random spinner circle grande</button>            
        
        </div>

        <hr/>
        <center id="spinner">aqui</center>


    <body>

</html>