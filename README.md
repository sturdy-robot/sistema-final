# Sistema de Recomendação para técnicas de tolerância a falhas em ambientes de nuvem

Esse sistema foi implementado como parte do TCC de Pedrenrique Gonçalves Guimarães.

Para rodar o sistema:
	git clone https://github.com/sturdy-robot/sistema-final.git
	git pull

Certifique-se de ter o NodeJS instalado, e também ter o python 3.6+ disponível.
	npm -v
	npm i -g ionic

Para instalar as dependências do Python:
	pip install scikit-surprise pandas numpy flask

Para rodar o sistema de recomendação, inicie o arquivo app.py que se encontra nesta página inicial. Por padrão, o Flask inicia no endereço 127.0.0.1:5000

Assim, é só iniciar o sistema do Ionic com o comando:
	ionic serve

É necessário iniciar o Flask primeiro para que ele seja capaz de rodar o sistema de recomendação, senão o Ionic não consegue utilizar o comando GET e disponibilizar o resultado na página inicial.

Cada um dos arquivos de usuários gerados encontra-se nesta pasta inicial, para fazer uso dos diferentes arquivos, vá em recommender_system.py e na função get_predictions() modifique o valor da variável dataset para o arquivo desejado.

O arquivo que guarda os dados das técnicas se encontra em src/apps/assets/data.json

Por padrão, o Flask mostra apenas os resultados do usuário 8, e fixa as recomendações de uma maneira específica para garantir reproducibilidade. Para alterar tais padrões deve-se alterar os valores em recommender_system.py, na função get_predictions_flask() altere ou delete o my_seed e o random.seed e o np.random.seed. Tais funções garantem que os resultados gerados aleatoriamente sigam uma semente.

No aplicativo Ionic, para pegar os dados de um usuário diferente, utilizamos um Service para prover os dados do serviço. Ele se encontra em /src/app/data.service.ts. O valor da variável flask está como: flask = 'http://127.0.0.1:5000/predictions/8' por padrão. Para alterar o usuário, basta alterar o número final da URL.

