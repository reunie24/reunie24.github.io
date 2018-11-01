//variable to track the number of steps
var totalsteps = 5;

// track steps
var currentstep;

//store html of each slide
var currentslide;

$(function(){
  $('.totalsteps').html(totalsteps);

  //hide the steps and multiple classes
  $('.steps li, .end, .controls,#prev').hide();
});


//click events


$('#begin').on('click', function(){
  //do something
  $('.welcome').hide();

  currentstep =1;
  currentslide= $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('.controls').fadeIn(1000);
  $('h2').html('Step' + currentstep);
});
//click on Next
$('#next').on('click', function(){
  if(currentstep != totalsteps){
  $(currentslide).hide();
  currentstep++;
  currentslide= $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('h2').html('Step' + currentstep);
  }

  //if statements
if(currentstep == totalsteps){
  $('#next').hide();
}
if(currentstep !== 1){
  $('#prev').show();
}
});

$('#prev').on('click', function(){
  $(currentslide).hide();
  currentstep--;
  currentslide= $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('h2').html('Step' + currentstep);

  //if statements
if(currentstep !== totalsteps){
  $('#next').show();
}
if(currentstep == 1){
  $('#prev').hide();
}
});
$('#finish').on ('click', function(){
  //hide everything again
  $('.steps li, #next, #finish, #prev').hide();
  $('.end').fadeIn(1000);
  $('#restart').show();
});

$('#restart').on('click',function(){
location.reload();
});
$('#flash').on('mouseover',function(){
  $(this).css('color','red');
});

$('#flash').on('mouseleave',function(){
    $(this).css('color','black');
});
$('.end').on('mouseover',function(){
  $(this).css('font-weight','bold')
  $(this).css('color','red');
});
