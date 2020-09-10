$( document ).ready(function() {
    $('.progressBar').each((index,element)=>{
        let max =$(element).data('max');
        let val =$(element).data('val');
        let title =$(element).data('title');
        let color =$(element).data('color') ?? "red";
        $(element).find('.progressBar-header .title').text(title);
        $(element).find('.progressBar-header .progressCount').text(`${val}/${max}`);
        $(element).find('.progressBar-bar .bar').css('width',`${val/max*100}%`);
        $(element).find('.progressBar-bar .bar').css('background-color',color);
    });
});
