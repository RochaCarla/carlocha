# Carlocha

## O que é?

O Carlocha é um template de site pessoal para pessoas que desejam criar e adicionar páginas e conteúdos através de arquivos markdown sem precisar colocar muita mão no código HTML ou CSS.

### Funcionalidades

- [x] Adicionar imagem do perfil, nome e descrição básica sobre você
- [x] Lista de contatos
- [x] Lista de interesses
- [x] Adicionar e editar páginas e conteúdos através de arquivos markdown
- [x] Selecionar tema claro ou escuro
- [x] Site responsivo

## Instruções para subir localmente o projeto

O sistema foi desenvolvido em ReactJs. O gerenciador de pacotes utilizado foi o NPM, portanto as instruções passadas aqui serão considerando o mesmo.

### Instalação das dependências

```
npm install
```

### Executar localmente o projeto

```
npm run dev
```

### Gerando os estáticos para deploy

```
npm run build
```

## Utilização

Após a instalação, considerando que você gostou do atual formato do template (cores e fontes) e deseja só utiliza-lo você só precisará saber das seguintes pastas: /markdowns e public/assets/.

A pasta markdowns é a pasta que conterá todos os seus arquivos markdowns e o arquivo index.tsx. O arquivo index.tsx é responsável por juntar todos os arquivos .md e definir os valores.
