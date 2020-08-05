var slider = document.getElementById("myRange");

 // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  $('#myRange').attr('value',this.value);
  $('#reqValue').html(this.value);
}


jQuery(document).ready(function(){
    // This button will increment the value
    $('#reqValue').html($('#myRange').val());
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if(currentVal<=5 && currentVal>=2)
        {
            if (!isNaN(currentVal)) {
            // Increment
                $('input[name='+fieldName+']').val(currentVal + 1);
            } else {
            // Otherwise put a 0 there
                $('input[name='+fieldName+']').val(0);
            }
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if(currentVal<=6 && currentVal>=3)
        {
            if (!isNaN(currentVal) && currentVal > 0) {
                // Decrement one
                $('input[name='+fieldName+']').val(currentVal - 1);
            } else {
                // Otherwise put a 0 there
                $('input[name='+fieldName+']').val(0);
            }
        }
    });
});

function raidLevelClick(btn)
{
    $('.btn').css('border','none');
    btn.style.border = "5px solid white";
    $('#raidLevel').attr('value',btn.innerText);
}

function readWrite(btn)
{
    if(btn.checked)
        $('#operation').attr('value',0);
    else
        $('#operation').attr('value',100);
}

function submitForm()
{
    let flag = true;
    let level = $('#raidLevel').val();
    let request = $('#myRange').val();
    let disks = $('#numDisk').val();

    if(level == 4 || level == 5)
    {
        if(disks < 3)
        {
            alert('The number of minimum disks required for raid level 4/5 is 3');
            flag = false;
        }
        else if(request%(disks-1) !=0)
        {
           alert('The number of request must be multiple of '+(disks-1)+' for raid level 4/5');
           flag = false;
        }
    }
    if(level == 1)
    {
        if(disks%2 != 0)
        {
            alert('The disk must be multiple of 2 for raid level 1');
            flag = false;
        }
    }
    if(level == 10)
    {
        if(disks<4)
        {
            alert('Minimum 4 disks are required for raid level 10');
            flag = false;
        }
        else if(disks%2 != 0)
        {
            alert('The number of disk must be multiple of 2');
        }
    }

    if(flag)
        document.getElementById("myForm").submit();
}
