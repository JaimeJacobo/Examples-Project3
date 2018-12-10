

$('#navClass').click(()=>{
    console.log('Bubucela')
})

setTimeout(()=>{
    $("#title").addClass('fadeOut')
},2000)

$(".btn-demo.inactive").click(()=>{   
        setTimeout(()=>{
        $(".modal-dialog").toggleClass("in");
    },200)
})

$(".modal-content").click(()=>{

})

$("#myModal2").click(()=>{
        setTimeout(()=>{
        $(".modal-dialog.in").toggleClass("in")
    },200)
    
})

$(".close").click(()=>{
        setTimeout(()=>{
        $(".modal-dialog.in").toggleClass("in")
    },200)
    
})



