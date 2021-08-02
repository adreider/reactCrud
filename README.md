# REACTCRUD

## freeCodeCamp

- [x] instalar "yarn add semantic-ui-react semantic-ui-css"
- [x] importar "import 'semantic-ui-css/semantic.min.css" no arquivo index.js
- [ ] Agora, vamos começar a construir nosso aplicativo CRUD usando React. Primeiro, adicionaremos um título ao nosso aplicativo. Em nosso arquivo app.js, adicione um título como este:

### EXEMPLO

import './App.css';

function App() {
return (
<div>
  React Crud Operations
</div>
);
}

export default App;

#####

Agora, vamos ter certeza de que está no centro. Dê ao div pai um nome de classe principal. E no arquivo App.css, usaremos o Flexbox para centralizar o cabeçalho.

### EXEMPLO

import './App.css';

function App() {
  return (
    <div className="main">
      React Crud Operations
    </div>
  );
}

export default App;

#### EXEMPLO App.css

.main{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

####

Portanto, parece um pouco melhor, precisamos torná-lo mais ousado e adicionar algumas fontes legais. Para fazer isso, usaremos tags de cabeçalho ao redor do nosso cabeçalho, como esta:

### EXEMPLO

import './App.css';

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
    </div>
  );
}

*app.css*
- exemplo 

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.main-header{
  font-family: 'Montserrat', sans-serif;
}

export default App;

####

- [x] Criar Pagina AlunoCreate
- [x] Criar api Mockapi.io