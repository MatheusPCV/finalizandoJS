var btn = document.getElementById('run').addEventListener('click', submit)

function submit() {
    //ocultar página 1 e exibir página 2
    let p1 = document.getElementById('page1')
    let p2 = document.getElementById('page2')
    let header = document.getElementById('header')
    let footer = document.getElementById('footer')
    let text1 = document.getElementById('codeHtml')
    let text2 = document.getElementById('codeJs')
    
    p1.style.display = "none"
    header.style.display = "none"
    footer.style.display = "none"
    p2.style.display = "flex"
    //inserir código em HTML
    let codeHtml = document.getElementById('codeHtml').value
    p2.innerHTML = codeHtml
    //inserir o código em JS
    let codeJs = document.getElementById('codeJs').value
    document.getElementById('jsUser').innerHTML = codeJs

    document.getElementById("link").setAttribute("href", "/style/style2.css")
    var button = document.createElement("button")
    button.addEventListener("click", reset)
    button.appendChild(document.createTextNode("RESET"))
    p2.appendChild(button)
}

    


    function reset() {
        //ocultar página 1 e exibir página 2
        let p1 = document.getElementById('page1')
        let p2 = document.getElementById('page2')
        let header = document.getElementById('header')
        let footer = document.getElementById('footer')
       
        
        p1.style.display = "flex"
        header.style.display = "flex"
        footer.style.display = "flex"
        p2.style.display = "none"

        document.getElementById("link").setAttribute("href", "/style/style.css")
    /*
    let codeJs = document.getElementById('codeJs').value
    var tagScript = document.createElement("script").setAttribute("type", "text/javascript")

    var textScript = document.createTextNode(codeJs)

    tagScript.appendChild(textScript)
    document.body.appendChild(tagScript) 
    */
}