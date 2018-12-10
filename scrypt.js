$("#formContent").hide();


$('#navClass').click(()=>{
    console.log('Bubucela')
})

setTimeout(()=>{
    $("#title").addClass('fadeOut');
    setTimeout(()=>{

        $("#formContent").show();
    },500)
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

// FORM FADE IN
// setTimeout =(() =>{
//     $("#formContent").show();
// },100)



