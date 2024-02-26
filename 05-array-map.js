const colors=["red","green","blue"]

// filter vs map 

// [1,2,3,4,5] --> odd --> [1,3,5] || a condition is applied and it gives only the true values
                            //    ||  number of input need to be equal to number of output
                            //    || type of input and output remains same

// [1,2,3,4,5]  --> map (numbers to text ) -->  ['one','two','three','four','five'] 

// || a transformation logic is applied and it will apply that logic to each element
// || and return an output for each element 

// || number of input element == number of output element
// || type of input may not be same as type of output




function convertToList(color){
    return `<li>${color}</li>`
}

const mappedList=colors.map(convertToList)

// Every color from colors array was sent to convertToList and we got the trasformed output

console.log("Original:",colors);
console.log("Mapped:",mappedList);

const mappedArray=[]
for(let index=0;index<colors.length;index++){
    const c=colors[index];
    const tag=`<li>${c}</li>`
    mappedArray.push(tag)
}

console.log(mappedArray);

const mappedFinal=colors.map((color)=>`<li>${color}</li>`)

{/* <div>
    <img src=""/>
    <h2>Title</h2>
    <p>Descrition</p>
</div> */}



const dataFromBackend=[
    {image:'img1.jpg',title:"Title 01",description:"Description 1"},
    {image:'img2.jpg',title:"Title 02",description:"Description 2"},
    {image:'img3.jpg',title:"Title 03",description:"Description 3"},
]

function generateList(data){
    return `<div>
    <img src="${data.image}"/>
    <h2>${data.title}</h2>
    <p>${data.description}</p>
</div>`
}

const componentsArray=dataFromBackend.map(generateList);

console.log(componentsArray)