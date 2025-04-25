var input = document.getElementById("taskInput")
var btn = document.querySelector("button")
var list = document.querySelector("ul")

btn.addEventListener("click", function () {

    if (input.value.trim() === "") {
        
        input.placeholder = "Please add a task"
        input.focus()
        input.style.border = "none"
        input.style.outline="1px solid red"
    }
    else {
        input.style.border="2px solid grey;"
        input.style.outline="1px solid black"
        var task = input.value
        input.focus() // to bring the cursor into input again automatically to type next task
        var li = document.createElement("li")
        li.textContent = task
        li.style.listStyleType = 'square';


        list.append(li)
        input.value = ""

        li.addEventListener("click", function () {
            li.style.textDecoration = "line-through"
        })
    }

})