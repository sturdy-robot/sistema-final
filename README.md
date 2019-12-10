# Sistema de Recomendação para técnicas de tolerância a falhas em ambientes de nuvem

Esse sistema foi implementado como parte do TCC de Pedrenrique Gonçalves Guimarães.

O sistema trata-se de uma ferramenta implementada em Ionic + Python que possui dados de técnicas de tolerância a falhas (no total 52 técnicas diferentes). Foi escolhida a biblioteca SurPRISE para cuidar do treinamento de dados de recomendação das técnicas, e o Ionic gerencia o modo como as informações são dispostas na tela.

## Instalação e Dependências

```
git clone https://github.com/sturdy-robot/sistema-final.git
git pull
```
Certifique-se de ter o NodeJS instalado, e também ter o python 3.6+ disponível.
```
npm -v
npm i -g ionic
```
Para instalar as dependências do Python:
```
pip install scikit-surprise pandas numpy flask flask-cors
```
Caso esteja rodando em Ubuntu Linux, certifique-se de rodar o PIP usando o Python 3.x:
```
python3 -m pip install scikit-surprise pandas numpy flask flask-cors
````

## Executando

Para rodar o sistema de recomendação, inicie o arquivo app.py que se encontra nesta página inicial. Por padrão, o Flask inicia no endereço http://127.0.0.1:5000

Assim, é só iniciar o sistema do Ionic com o comando:
```
ionic serve
```
É necessário iniciar o Flask primeiro para que ele seja capaz de rodar o sistema de recomendação, senão o Ionic não consegue utilizar o comando GET e disponibilizar o resultado na página inicial. De qualquer forma, o Ionic ainda consegue pegar os dados das técnicas de tolerância na Lista de Técnicas de Tolerância a Falhas.

## Alterando os dados disponíveis

Cada um dos arquivos de usuários gerados encontra-se nesta pasta inicial, para fazer uso dos diferentes arquivos, vá em `recommender_system.py` e na função `get_predictions()` modifique o valor da variável dataset para o arquivo desejado.

O arquivo que guarda os dados das técnicas se encontra em src/apps/assets/data.json e pode ser modificado pelo usuário.

## Padrões fixados

### Aleatoriedade e utilização de um usuário diferente
Por padrão, o Flask mostra apenas os resultados do usuário 8, e fixa as recomendações de uma maneira específica para garantir reproducibilidade,
evitando a aleatoriedade que o SurPRISE gera para cada recomendação. Entretanto, a URL da homepage recebe dois parâmetros: `/userId/randOn`.
Tais parâmetros correspondem ao Id do Usuário e à ativação da aleatoriedade. Alterando o ID do usuário, você recebe as recomendações
para o usuário daquele id. Alterando o valor de `randOn` para `0` você liga a aleatoriedade, e a cada atualização de página, o sistema irá calcular
uma recomendação distinta, assim como outros sistemas de recomendação fazem (como o Youtube, Facebook, etc).

## Licença

O trabalho é distribuído sobre licença MIT, de forma gratuita e de código aberto.
