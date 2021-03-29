
// Page load functions:
window.addEventListener("load",function(){

    makeBlocksDragable();
    makeAreasDropable();

});

// Adds block dragging functionality to all block elements
function makeBlocksDragable(){

    // Get all the block objects
    var blocks = document.getElementsByClassName("block");

    // When a block is picked up, set global data variables to its values.
    for (i=0; i<blocks.length;i++){
        blocks[i].addEventListener('dragstart',function(event){
            //event.preventDefault();
            event.dataTransfer.setData("value", event.target.getAttribute("value"));
            event.dataTransfer.setData("type", event.target.getAttribute("type"));
            // set this block as the last selected, so that it gets removed when dropped
            // make sure not to remove the output block though or else it's gone forever lmao
            if (this.getAttribute("type") != "output"){
                this.setAttribute("id","last-selected");
            }
        });

    }

}

// Makes the input/operation/bank areas valid locations to drop blocks into
function makeAreasDropable(){
    // When a block is dropped, check the value and type global data variables
    // and append the appropriate block to that container.

    var blockBank = document.getElementById("block-bank");
    var inBlock1 = document.getElementById("input-block-1");
    var opBlock = document.getElementById("operator-block");
    var inBlock2 = document.getElementById("input-block-2");
    let list = [inBlock1,inBlock2,blockBank,opBlock];
    list.forEach(function(item){
        item.addEventListener("dragover",function(event){
            event.preventDefault();
        });
        item.addEventListener("drop",function(event){
            event.preventDefault();
            dropBlock(event);
        });
    })

}

// Updates the value in the output block based on the values in the inputs/operator
// Right now it's hard coded to only to basic math because this turned out to be a lot more work than expected
function updateOutputBlock(){
    // get the output block element
    var outBlock = document.getElementById("output-block").children[1];
    
    // get the input block values
    var in1 = document.getElementById("input-block-1").children[1].getAttribute("value");
    var in2 = document.getElementById("input-block-2").children[1].getAttribute("value");

    // get the operator block value
    var op = document.getElementById("operator-block").children[1].getAttribute("value");

    // do the operation:
    var result;
    if (op == "+"){
        result = parseInt(in1) + parseInt(in2);
    }
    else if (op == "-"){
        result = parseInt(in1) - parseInt(in2);
    }

    // update the output block
    outBlock.innerHTML = result;
    outBlock.setAttribute("value",result);
}

// adds a block to the given event target
function dropBlock(event){

    // attempt to destroy the old block
    // sometimes the block is simply too powerful to be destroyed though
    try{
        destroyBlock();
    }
    catch(err){
        console.log(err);
    }

    // get the data variables
    var value = event.dataTransfer.getData("value");
    var type = event.dataTransfer.getData("type");

    // if the type is output, change it to input
    if (type == "output"){
        type = "input";
    }

    // create a block object based on said values
    var newBlock = document.createElement("div");
    newBlock.innerHTML = value;
    newBlock.setAttribute("class","block");
    newBlock.setAttribute("value",value);
    newBlock.setAttribute("type",type);
    newBlock.setAttribute("draggable",true);
    // append it to the target
    event.target.appendChild(newBlock);
    // make it dragable
    makeBlocksDragable();
    // update the output block
    updateOutputBlock();
}

// removes the last selected block
function destroyBlock(){
    document.getElementById("last-selected").remove();
}