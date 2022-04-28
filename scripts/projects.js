$(document).ready(function()
{
    // preload the image for each link
    $("#project_1 a").each(function()
    {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr('href');
    });

    // set up the event handlers for each link
    $("#project_1 a").click(function(evt)
    {
        //swap image
        var imageURL = $(this).attr("href");
        $("#main_image_1").attr("src", imageURL);

        //swap caption
        var caption = $(this).attr("title");
        $("#caption_1").text(caption);

        //cancel the default action of the link
        evt.preventDefault(); //jQuery cross-browser method
    }); //end click

    //move focus to first thumbnail
    $("li:first-child a").focus();

}); //end ready

$(document).ready(function()
{
    // preload the image for each link
    $("#project_2 a").each(function()
    {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr('href');
    });

    // set up the event handlers for each link
    $("#project_2 a").click(function(evt)
    {
        //swap image
        var imageURL = $(this).attr("href");
        $("#main_image_2").attr("src", imageURL);

        //swap caption
        var caption = $(this).attr("title");
        $("#caption_2").text(caption);

        //cancel the default action of the link
        evt.preventDefault(); //jQuery cross-browser method
    }); //end click

    //move focus to first thumbnail
    $("li:first-child a").focus();

}); //end ready