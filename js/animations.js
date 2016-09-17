$(document).ready(function(){
$('time.timeago').timeago();
$('.button').hide();
$('#char-count').hide();
tweetActionsInit();
$('.stats').hide();
$('.reply').hide();

$('body').on('click', '.tweet-compose', function() {
  $('.button').show();
  $('#char-count').show();
  $('.tweet-compose').css({'height':'5em'});
});


// $('tweet-compose').on('click', function() {
//   $('.button').show();
//   $('#char-count').show();
//   $('.tweet-compose').css({'height':'5em'});
// });

var newCharCount = 140;

$('body').on('keyup', '.tweet-compose', function() {

   newCharCount = 140 - $(this).val().length;
   $('#char-count').text(newCharCount);

   if (newCharCount < 10) {
     $('#char-count').css({'color':'red'});
   }

   if (newCharCount < 0) {
    $('.button').prop('disabled', true);
    $('#char-count').text(0);
  }

   else {
     $('#char-count').css({'color':'black'});
     $('.button').prop('disabled', false);
   };
 });

 $('#tweet-submit').on('click', function() {
   var newTweet = $('.tweet-compose').val();
   var currentTime = $.timeago(new Date());
   var tweetActions =
   '<div class="tweet-actions">'+
   '<ul>'+
   '<li><span class="icon action-reply"></span> Reply</li>'+
   '<li><span class="icon action-retweet"></span> Retweet</li>'+
   '<li><span class="icon action-favorite"></span> Favorite</li>'+
   '<li><span class="icon action-more"></span> More</li>'+
   ' </ul>'+
   '</div>';

  $('#stream').prepend(function() {

      return '<div class="tweet">'+
      '<div class="content">'+
      '<a data-toggle="tooltip" title="Hunter"><img class="avatar" src="img/alagoon.jpg" /></a>'+
      '<strong class="fullname">Hunter</strong>'+
      '<span class="username">@nasa</span>'+
      '<p class="tweet-text">' + newTweet + '</p>'+
      tweetActions +
      '<div class="time">' +
      currentTime +
      '</div>'
  })
  tweetActionsInit();

 })


 function tweetActionsInit() {
         $('.tweet-actions').hide();


         $('.tweet').hover(function() {
             $(this).find('.tweet-actions').show();
         }, function() {
             $(this).find('.tweet-actions').hide();
         });

     }

     $('.tweet').on('click', function(){
       $(this).find('.stats').toggle();
       $(this).find('.reply').toggle();
     })


     $('[data-toggle="tooltip"]').tooltip();


// $('.icon action-retweet').on('click', function(){
//   var num = 0;
//   num++;
//   $('.num-retweets').text(num);
// })



 });
