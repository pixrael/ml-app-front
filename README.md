# ml-app-front


Introduction 
This project is a frontend part that allows the users to search "Mercado Libre" products, see a result list of searched product and the details of a selected product.

Technologies
Used React version 17.x.x

*Running the project locally
1-Clone or download the current repository.
2-Update the server location, by editing the file ml-app/environments to point your server.
3-Run inside the ml-app folder "npm start".

*Generating a build to deploy in your server:
1-Clone or download the current repository.
2-Inside the folder ml-app, generate the build by running "npm run build".
  This will create a build folder with all the project inside.
  The build is created taking in account that the files will be placed inside a folder named views in your server. If you want to use a different folder then you should change the "home" property in the ml-app/package.json just before run the command "npm run build"
3-Copy the generated files from the build folder to your views folder in your server.

