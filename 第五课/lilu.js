  function $(tag){
                var string=tag.substr(0,1);
                switch(string){
                  case "#":
                  return document.getElementById(tag.substring(1));
                  break;
                  case ".":
                  return document.getElementsByClassName(tag.substring(1));
                  break;
                  default:
                  return document.getElementsByTagName(tag);
     }        
 }
