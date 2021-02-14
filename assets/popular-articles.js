        //should remove all of this code at a later date. replaced it all with handlebars server side rendering


$(function() {
    let popularArticles = '/api/v2/help_center/'+lang+'/articles.json?label_names=popular_articles';
    console.log("hi!");
    console.log(popularArticles);

    let articleHTML = $('.hero-popular-help-topics');

    let newHTML = "";
    $.getJSON(popularArticles, function(data) {
        console.log(data);
        for(let val in data.articles) {
            let obj = data.articles[val];
            console.log(obj);
            newHTML += '<a href="'+obj.html_url+'">'+obj.title+'</a>';
        }
    }).then(function() {
        console.log(newHTML);
        //articleHTML.append(newHTML);
    })
})