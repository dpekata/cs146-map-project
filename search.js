document.getElementById("searchState").onclick = ()=> {
    list = document.getElementsByClassName("stateLink");
    foundState = false;
    for(let element of list){
      if(element.href.includes(document.getElementById("search").value.toLowerCase().replace(" ", "_"))){
        document.getElementById("result").innerHTML = `<button>${document.getElementById("search").value}</button>`;
        document.getElementById("result").href = element.href;
        foundState = true;
      }
    }
    if(foundState == false){
      document.getElementById("result").innerHTML = `<button>State Not found</button>`;
      document.getElementById("result").href = element.href;
      document.getElementById("result").value = "javascript: void(0)";
    }
  }