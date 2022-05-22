// Ab Javascirpt Libary 

// Get the ID of a html tag 
export function Id(id)
{
    return document.getElementById(id);
}

export function Style(id)
{
    return document.getElementById(id).style;
}

//Get id of something and choose it's display value 
export function Display(id,displayvalue)
{
    document.getElementById.style.Display = displayvalue;
}

//ShowHide function (Used to show and hide a html element ) 
export function ShowHide(id)
{
    let myid = document.getElementById(id);

    if(myid.style.display == "block")
    {
        myid.style.display = "none";
    }
    else if(myid.style.display == "none")
    {
        myid.style.display = "block";
    } 
    
}


//Event Method (Simple way to call a event)
export function Event(id,event,method)
{
    document.getElementById(id).addEventListener(event,method);
    
}




export function Ajax_POST(url,id,vars,loadMessage)
{
    //Make a new request 
    let ajax = new XMLHttpRequest();

    

    
	ajax.onreadystatechange=function()
	{
		if (ajax.readyState==4 && ajax.status==200)
		{
			document.getElementById(id).innerHTML=ajax.responseText;
		}
	}
	
	if(_file != null)
	{
		ajax.open("GET",_file,true);
		ajax.send();
		
	}
	return ajax;
}

export function Ajax_GET(id,_file)
{
	let ajax = new XMLHttpRequest();
	
    ajax.onreadystatechange=function()
	{
		if (ajax.readyState==4 && ajax.status==200)
		{
			document.getElementById(id).innerHTML=ajax.responseText;
		}
	
	
        if(_file != null)
        {
            ajax.open("GET",_file,true);
            ajax.send();
            
        }
    }

	return ajax;

}

//Export Function's  




        



