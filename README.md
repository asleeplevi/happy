<h1 align="center">
 <img alt="happy" src="https://user-images.githubusercontent.com/42044422/97951804-23df8980-1d7a-11eb-8eee-95fc22ee3c82.png"/>
</h1>

<p align="center">
  <a href="#bulb-sobre">Sobre</a> |
  <a href="#rocket-o-próximo-nível">O próximo nível</a> |
  <a href="#mag-tecnologias">Tecnologias</a> | 
  <a href="#art-layout">Layout</a> |
  <a href="#pushpin-como-executar">Como executar</a> |
  <a href="#wrench-como-contribuir">Como contribuir</a> |
  <a href="#pencil-licença">Licença</a>
</p>

<br>

## :bulb: Sobre

Happy é um projeto que permite ao usuário cadastrar orfanatos, com o intuito de facilitar e promover visitas as instituições, fornecendo os dados necessários para encontrar e marcar visitas!

Esse projeto foi desenvolvido durante a terceira edição da Next Level Week, um evento da [Rocketseat](https://github.com/Rocketseat)


## :rocket: O próximo nível

Desafios fornecidos pela rocketseat, entregues ao fim da semana NLW com o intuito de levar a aplicação para um próximo nível!

- **Acesso restrito** :heavy_check_mark:
  <br> Área administrativa, com rotas autenticadas, e função lembrar-me.
- **Recuperação de Senhas** :heavy_check_mark:
  <br> Envio de email, com link para a recuperação de senha.
- **Cadastro Pendente** :heavy_check_mark:
  <br> O cadastro do orfanato fica como pendente, e só aparece no mapa, após a aprovação de um administrador.
- **Localização real do usuário** :interrobang:
  <br> Pegar a localização real do usuário. _O mapa já pega a sua localização, mas a cidade e estado ainda é estático._
- **Logout da aplicação** :heavy_check_mark:
  <br> Botão para sair da aplicação, limpando os dados no localStorage.
  
  
## :mag: Tecnologias

**Backend**
- Typescript
- NodeJS
- Express
- Sendgrid
- Cors
- JWT
- Yup
- Bcrypt
- Typeorm
- PG

**Frontend**
- Typescript
- ReactJS
- React router dom
- React icon
- Axios
- Leaflet
- Styled Components

## :art: Layout

O layout foi desenvolvido por [Tiago Luchtenberg](https://www.instagram.com/tiagoluchtenberg/) e está disponível [aqui](https://www.figma.com/file/WN1nagnfaEG6C1iiSoXx1o/Happy-Web-2.0?node-id=48861%3A291)
  
  
## :pushpin: Como executar

Você pode testar a aplicação neste [link](https://5fa0cd9aab138f008727036a--asleeplevi-happy.netlify.app/)

Ou se quiser baixar, é só seguir estes passos:

**1. Clonar respositório**

Para clonar este repositório, digite o comando

```

$ git clone https://github.com/asleeplevi/happy.git

```

**2. Instalar pacotes**


Instale as dependências
```

$ yarn 

# ou se usar npm
    
$ npm install

```

**3. Configurar variáveis ambiente**

Abra o arquivo .env-example e coloque seu token de mapbox, caso não tenha, acesse [aqui](https://www.mapbox.com/) e crie uma conta gratuita. 
Por fim, altere o nome do arquivo para .env e continue para o próximo passo.


**4. Iniciar aplicação**

Inicie a aplicação com o comando 
```

$ yarn start
  
# ou caso use npm
  
$ npm install

```

**5. Acessar aplicação** 

E agora é so acessar sua aplicação que vai estar rodando em http://localhost:3000


**Detalhe:**
A aplicação estará buscando as informações na minha API, que está rodando no heroku. O código desta API está disponível [aqui](https://github.com/asleeplevi/happy-server)


## :wrench: Como contribuir

- Faça um fork desse repositório.
- Crie uma branch: 
```

git checkout -b my-feature

```
- Faça commit do seu código: 

```

git commit -m 'my new feature'

```

- Faça push para a sua branch: 

```

git push origin my-feature

```


## :pencil: Lincença

Este projeto está sob licença [MIT]().

Feito com :blue_heart: por Levi
