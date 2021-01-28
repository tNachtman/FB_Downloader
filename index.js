$(document).ready(()=>{
    $('#start').on('click', ()=>{
        // window.open('view-source:'+$('#link').val(), '_blank');
        if($('#link').val().search('view-source:') != -1){
            console.log("Już skopiowano!");
        }else{
            $('#link').val('view-source:'+$('#link').val());
            let copyText = document.getElementById('link');
            copyText.select();
            copyText.setSelectionRange(0, 99999);
    
            document.execCommand("copy");
        }
    });

    $('#code').on('click', () => {
        //#source
        let source = $('#source').val();
        // console.log(source.search('.mp4'));
        source = source.substr(source.search('.mp4')-200, 500);
        console.log(source);
        console.log(source.search('https'));
        console.log(source.search('","start'));
        source = source.substring(source.search('https'), source.search('","start'));
        source = source.split('\\').join('');
        console.log(source);
        window.open(source, '_blank');
    });
});