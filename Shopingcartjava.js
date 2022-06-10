var products = [
	{
		"id"	: 1, 
		"title"	: "Name: AJ 1 Trippel White", 
		"dscrpt": "Clean shoe fits with every fit",
		"price"	: 125,
		"img"	: "https://images.restocks.net/products/554724-130/air-jordan-1-mid-triple-white-2-2020-1-1000.png"
	},
	{	
		"id"	: 2,
		"title"	: "Name: AJ 1 Travis high", 
		"dscrpt": "Is een colab met Travis Scott",
		"price"	: 250 ,
		"img"	: "https://sneakernews.com/wp-content/uploads/2019/05/travis-scott-jordan-1-release-reminder-1.jpg"

	}
];
 
 console.log(products);

 $.each(products, function (i, product) {
 	console.log(i);
	$('#products').append('<button type="button" class="btn btn-light" data-price="'+product.price+'" data-id="'+product.title+'">Buy</button>');
 	$('#products').append('<img src="'+product.img+'">');
 	$('#products').append('<li>'+product.title+'</li>');
 	$('#products').append('<li>'+product.dscrpt+'</li>');
	$('#products').after("<br />");
 });

 $('button').click(function (e) {
 	var item1 = $(this).data('id');
 	var item2 = $(this).data('price');
	var val1 = 0;
 	$('#sc').append('<li>'+item1+'</li>');
 	$('#in1').html(function(i, val) { return val1+item2 });
	 removeItem();
	});

	 function removeItem() {
  $(".knop2").click(function(e){
	  var item2 = $(this).data('price');
	  var item3 = $(this).html(".list");
	  console.log('test');
	  $('.totaal_kost').html(function(i, val) { return val0+item2 });
	  $(item3).remove();
  })
};