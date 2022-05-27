function toggler(x,y,z) {
   
    let arr = arguments
    let i =0;
    
    return function(){
        console.log(arr[i]);
        i++

    }
}

const toggle = toggler(1, 7, 3)

toggle()

toggle()

toggle()
