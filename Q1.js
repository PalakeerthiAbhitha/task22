var h=document.createElement('h1')
h.setAttribute("id","title")
var h=document.createElement('h1')

var div1=document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)


var row=document.createElement('div')
row.classList.add('row')
div1.appendChild(row)

   

var arr=[];

fetch('https://type.fit/api/quotes')
.then((d)=>d.json())
.then((data)=>{
    // console.log(data[0])


    arr.push(data)

    row.innerHTML=""

  for(let i=0;i<data.length;i++){
      mySet1.add(data[i].author)

  }  
  
  
  console.log(mySet1)


})
.catch((er)=>{
    console.log("error")
})


var h=document.createElement('h1')
h.setAttribute("id","tittle")
h.classList.add("text-center")
h.innerText="Quotes"
document.body.append(h)


var div1=document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)

div1.append("Search ")
var input=document.createElement("input")
input.setAttribute("type","text")
input.setAttribute('id',"tt")
div1.appendChild(input)



//console.log(a)
button=document.createElement("button")
button.setAttribute("onclick","fun()")
button.innerText="Search"
div1.appendChild(button)

ans=document.createElement('div')
ans.setAttribute('id','ans')
div1.appendChild(ans)


var row=document.createElement('div')
row.classList.add('row')
//row.innerText="hello"
div1.appendChild(row)


console.log("Array",arr);
var flag=0
b=[]
str=""
function fun(){

    let end=document.getElementById('tt').value
    // alert(end)
    let final=[]
    for(let i=0;i<arr[0].length;i++){
        if(arr[0][i].author == end){
            final.push(arr[0][i].text)
        }
    }

    console.log(final);
    let h3=document.createElement('h3')
    h3.innerHTML=end
    ans.appendChild(h3)
    for(let i=0;i<final.length;i++){
        let sub_div = document.createElement('div')
        sub_div.innerHTML=final[i]
        ans.appendChild(sub_div)
        document.getElementById('tt').value=""
    }
}

var div1=document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)


var row=document.createElement('div')
row.classList.add('row')
div1.appendChild(row)

fetch('https://type.fit/api/quotes')
.then((d)=>d.json())
.then((data)=>{
    // console.log(data)
    // console.log(data.length)
    for(let i=0;i<100;i++){
        row.innerHTML += `  <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2 b">
        <div class="card  text-center">${i+1}
        <div class="card-header text-center">Poetry<div>
        <div class=" card-body ">
            <div class = " card-text "> Author: ${data[i].author}</div>
            <div class = " card-text a">  Quote: ${data[i].text}
            
            </div>
       
        </div>
        </div>`
    }


})
.catch((er)=>{
    console.log("error")
})