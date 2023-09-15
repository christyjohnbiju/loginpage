function Login()
{

    const name="providence";
    const pass="1234";

    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;

    if (name==username&&pass==password)
     
    {
        link()
    }
    else
    {
        alert("Invalid username or Password")
    }

}
function link()
{
    window.open(document.getElementById("link").href);
}