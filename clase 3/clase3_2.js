$("#buscar").click(function(){
    let ajax=new XMLHttpRequest();
    ajax.onreadystatechange=function(){
        if(this.readyState==4){
            $("#respuesta").html(this.responseText);
        }
    }
    ajax.open("get","http://www.omdbapi.com/?apikey=b7cfd32b&s=jaime");
    ajax.send();
})
