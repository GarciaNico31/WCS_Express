// Importation module http
const http = require('http');

// Création constante port serveur sur lequelle il va écouter
//  Chaques applications serveur reçoit des requêtes sur son port spécifique
const port = 8000;

// Request Handler (gestionnaire de requêtes) - Apellera cette fonction à chaque fois que le serveur recevra une requete
// Reçoit 2 parametres : Request est un objet avec les infos client vers serveur, l'attribut url contient l'url demander par le client
// et Response est un objet qui contient les infos du serveur au client, il a des méthodes pour envoyer un code statut (200: Opération réussie / 404: Ressources introuvables / Etc ...)  || Contenu (HTML , JSON, images)
// en têtes qui dit au client comment interpréter ce contenu
const requestHandler = (request, response) => {
    console.log(request.url); // Affiche dans la console serveur l'url demandé par le client
    if (request.url === '/'){
        response.end('Hello Node.JS Server !');
    } else if (request.url === '/About') {
        response.end('This demonstrates routing with Node.JS');
    } else {
        response.end('Default page (URLs other than / and / about');
    }
}


// Création serveur graçe à la méthode createServer et passe requestHandler en param
const server = http.createServer(requestHandler);

// Ecouter le port pour déboger | Err est un callback si la requête échou Err devient un objet de type error sinon Undifined
server.listen(port, (err) => {
    if (err) {
        console.log("Somthing bad happened");
    }
    else {
        console.log(`Server is listening on ${port}`);
    }
});