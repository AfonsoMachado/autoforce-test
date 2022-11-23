<table align="center"><tr><td align="center" width="9999">

<h2>
Desafio Suporte Front-end - Autoforce
</h2>

<p align="center">
  <a href="#parte-1-manipulando-o-dom">Parte 1 - Manipulando o DOM</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#parte-2-codificação-de-interface">Parte 2 - Codificação de Interface</a>&nbsp;&nbsp;&nbsp;
</p>

</td></tr>
</table>

# Parte 1 - Manipulando o DOM

Manipule o DOM do site https://testes.autoforce.com.br/autoforce-ford usando javascript para obter os resultados enumerados a seguir.

## Desafio 1.1 -  Modifique os itens de menu "Novos" e "Seminovos" e reordene os itens do menu

Crie um novo item dropdown para o menu e o intitule "Veículos".
Os itens "Novos" e "Seminovos" devem ser realocados para esse novo dropdown. O item "Veículos" deve ser o primeiro do menu. Após este primeiro passo, reordene a disposição do menu para a seguinte ordem:

Veículos | Consórcio | Pós-Venda | Ofertas Únicas | Vendas Diretas | Contato

**Resoluçao: [Desafio 1.1](https://github.com/AfonsoMachado/autoforce-test/blob/master/Parte%201/autoforce1.1.js)**

## Desafio 1.2 -  Modifique o formulário de "Estou Interessado"

No seguinte site: https://testes.autoforce.com.br/autoforce-ford/novos/territory-2022
Adicione os seguintes campos:

- 1 Select com as opções: SUV,  Senda, Hatch e Pickup;
- 1 Textarea com placeholder "Mensagem".


**Resoluçao: [Desafio 1.2](https://github.com/AfonsoMachado/autoforce-test/blob/master/Parte%201/autoforce1.2.js)**

## Desafio 1.3 - Remova o formulário de conversão após clique no whatsapp

Ao clicar em qualquer link do dropdown de 
Whatsapp, um formulário modal é aberto.
Remova a aparição deste formulário de forma que o usuário seja direcionado para janela do Whatsapp em uma nova aba.


**Resoluçao: [Desafio 1.3](https://github.com/AfonsoMachado/autoforce-test/blob/master/Parte%201/autoforce1.3.js)**

## Desafio 1.4 - Crie um botão flutuante de WhatsApp

Crie um popup de WhatsApp fixado no canto inferior esquerdo da tela, ao clicar nesse botão três números devem aparecer:
(Seminovos: +55 (11) 99999-9999, Serviços +55 (11) 11111-11111 e Central de Vendas: +55 (11) 88888-8888), um novo clique em qualquer um desses números deve encaminhar o usuário diretamente para o WhatsApp.

**Resoluçao: [Desafio 1.3](https://github.com/AfonsoMachado/autoforce-test/blob/master/Parte%201/autoforce1.4.js)**

# Parte 2 - Codificação de Interface

## Descrição do Projeto

Condificação da interface contida no [Figma](https://www.figma.com/file/mEuuuja11kYw9M9swY69wl/Desafio-Genius?node-id=34%3A42). Para este projeto foi utilizado o React junstamente com SASS para auxílio no desenvolvimento

## :computer: Tecnologias

Tecnologias utilizadas para o desenvolvimento:

- [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [BootstrapVue](https://bootstrap-vue.org/)


## :fire: Executando o projeto

### Requisitos Necessários

- [Node.js v16.17.0](https://nodejs.org/download/release/v16.17.0/)
- [npm v8.15.0](https://www.npmjs.com/) (Instalado juntamente com o Node.js v16.17.0)

**Instalação e execução**

```bash
# Instale todas as dependências necessárias:
$ npm install

# Para iniciar o servidor de desenvolvimento do Nuxt:
$ npm run dev
```

- Após isso, o projeto pode ser acessado a partir da URL http://localhost:3000.

## :up: Deploy

Com a finalidade de realizar testes, foi realizado o deploy deste projeto usando o <a target="_blank" href="https://vercel.com/">Vercel</a>. O mesmo pode ser acessado através da URL: https://compayz-vuejs-test.vercel.app/.

---

<p align="center">Feito com 💜 por <strong><a href="https://www.linkedin.com/in/AfonsoMachado/">Afonso Machado</a> 🥰 </strong> </p>
