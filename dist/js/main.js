$(document).ready(function () {  
        $(".my-progress-bar").circularProgress({
            line_width: 6,
            color: "rgb(255, 20, 20)",
            starting_position: 125, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true,
            text: 'ton test est valider à 100 %'
        }).circularProgress('animate', 100, 5000);
});