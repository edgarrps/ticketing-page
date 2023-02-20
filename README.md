# Ticketing Page
<img src="https://i.imgur.com/N8UtG1K.png" align="right"
     width="166" height="196">


[ticketing-page.vercel.app](https://ticketing-page.vercel.app/)

## Basic Overview
### Project made for a simple ticket implementation system, where the user can perceive any demand for request, suggestion, complaint and other questions.
> Made with React.Js + Tailwind.CSS 
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" align="left" width="50" height="50">
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" align="left" width="50" height="50">
<img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" align="left" width="50" height="50">
<br>
<br>

## How It Works

1. The user registers in the system, so that he has access to the ticket 
    generation system (password of at least 6 characters);
    
2. After registration, the user is able to log in and then 
    be redirected to the tickets screen;
   
3. At this time, the user can create a `new ticket` or `logout`;

4. Em novo ticket, o usuário precisa preencher os campos `Title`, `Category`, `Urgency`, `Description`;

5. Finally, the user will create a new ticket and an alert will be triggered with its respective ID;

6. To see the list of tickets, the user must click on `back` button.


### Login management

  Login is done through a fictitious token which is saved in localStorage, without requiring any API 
  for authentication. The idea at first is to expose the project.
  
  ```
  export const fakeToken = 'fakeTokenParaLogin'
  ```

### Instructions to use

1. After clone the project (aka `git clone https://github.com/edgarrps/ticketing-page.git`):
```
npm i
```
2. Install tailwind dependences

```
npm i -D tailwindcss postcss autoprefixer
```

3. And voilá! just run on localhost with:

```
npm run dev
```

## Important notes/issues

* For now, it is not possible to drill down on tickets after the ID is clicked, this will be implemented soon;

* The user when logging out and signing in again, is not being redirected to the tickets screen automatically;

* If the user is already logged in, he is able to return to the login screen, where he ends up redoing the login unnecessarily;

* As the user is already logged in, even if he makes a mistake in the login and password on the login screen, he can access it, 
  because validation is done by the token saved in localStorage.
