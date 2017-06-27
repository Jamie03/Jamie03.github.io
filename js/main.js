var x = 0;
$(document).ready(function()
{    
    var page = 1;
    var postCounter = 0;
    var URL = "https://jsonplaceholder.typicode.com";
        $.get(URL + "/posts", function(obj){
                addPost(obj);
           });

    function addPost(obj)
    {
        for (var i = postCounter; i < 10 * page; i++)
        {
            var holder = $("<div>");
            var title = $("<div>");
            var user = $("<div>");
            var postContent = $("<div>");

            console.log("hehe");
            $(title).addClass("title");
            $(user).addClass("poster");
            $(postContent).addClass("post");
            $(holder).addClass("media-body");

            getUser(obj[i].userId - 1, user);

            $(postContent).text(obj[i].body);


            $(title).html("<h3>" + obj[i].title + "</h3");

            $(holder).append(title);
            $(holder).append(user);
            $(holder).append(postContent);



            $(".scroll-div").append(holder);
            postCounter++;
        }
    }

    function getUser(i, userDiv)
    {

         $.get(URL + "/users", function(obj){
            console.log(obj[i].username);
            $((userDiv).html("<h5>" + obj[i].username + "</h5>" + "<div class = id>" + (i + 1 )+ "</div>"));
         });
    }

    $(document).on("click", ".poster", function(){
        console.log("YAY");
        var id = $(this).children(".id").text();
        console.log(id);
        window.open("profile.html?id=" + id);
    });

    $(document).on("click", ".title", function(){
        console.log("YAAYY");
     });

    $(".btn").click(function(){
        page++;
        $.get(URL + "/posts", function(obj){
                addPost(obj);
           });
    });
 });