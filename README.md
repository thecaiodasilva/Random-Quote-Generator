# Random-Quote-Generator
Ao dar funcionalidade a este gerador de citações usando javascript. Selecionamos o elemento quote, author e btn e os atribuímos a diferentes variáveis.
Da mesma forma, criamos uma variável chamada url que armazena o URL para nossa API como uma string.

Primeiramente, criamos uma função chamada getQuote(). Dentro dessa função, buscamos a URL e obtemos uma resposta JSON. Essa resposta é basicamente um objeto JSON. Agora temos que passar por esses dados e selecionar o conteúdo de nossa escolha.

O item .content me dá a citação enquanto item.author nos dá o nome do autor. Em seguida, alteramos o conteúdo do texto da citação e do autor para item .contente, item.author respectivamente.

Chamamos getQuote() quando o evento load é acionado no elemento janela ou o evento click é acionado no btn elemento.
