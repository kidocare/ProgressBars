// import "bootstrap";

// document.getElementById('btn-1').addEventListener('click', progressBar);

window.onload = function () {
    // const jokesNumbers = document.querySelector('input[type="number"]').value;
    xhr = new XMLHttpRequest();
    xhr.open('GET', `http://pb-api.herokuapp.com/bars`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            const progressNum =JSON.parse(this.responseText);
            var limit = progressNum.limit;
            console.log(limit);
            let btnBar = '';
            progressNum.buttons.forEach((element,index) => {

                btnBar += `<button type="button" class="btn btn-secondary" id="btn-${index}" onclick="addToBar(${element} , ${limit})">${element}</button>`;
                console.log(btnBar);
            });
            document.getElementById('btn-ctr').innerHTML = btnBar;
            console.log(progressNum);
            // document.getElementById('btn-1').textContent = progressNum.buttons[0];
            // document.getElementById('btn-2').textContent = progressNum.buttons[1];
            // document.getElementById('btn-3').textContent = progressNum.buttons[2];
            // document.getElementById('bar-1').style.width = progressNum.bars[0] * 10 + 'px';
            // document.getElementById('bar-2').style.width = progressNum.bars[1] * 10 + 'px';
            // document.getElementById('bar-3').style.width = progressNum.bars[2] * 10 + 'px';
            // document.getElementById('bar-1').textContent = progressNum.bars[0] ;
            // document.getElementById('bar-2').textContent = progressNum.bars[1] ;
            // document.getElementById('bar-3').textContent = progressNum.bars[2] ;
           let prBar = '';
            progressNum.bars.forEach((element,index) => {
                prBar += `<div class="row my-3 ">
                <div class="col-12 d-flex justify-content-center" >
                    <div class="progress" style="height: 40px;width:${limit}px;" >
                        <div  aria-valuenow="${element}" aria-valuemin="0" aria-valuemax="${limit}" id="${element}" role="progressbar"  
                        class="progress-bar bg-info progress-bar-striped progress-bar-animated" style="width:${element /limit * 100}%;" >${element}</div>
                    </div>
                </div>
            </div>`;
                
            });
            document.getElementById('proBar').innerHTML = prBar;
           
          
            let selBar = '';
            let selBarMain = `	
            <select onchange= "barSelect(value)"  id="select-ctr" class="form-control pr-5 mr-3" ></select>
            `;
            document.getElementById('select-main-ctr').innerHTML = selBarMain;
            progressNum.bars.forEach((elem,index) => {
                selBar += `<option   id="sel${elem}" data="${elem}" value = "${elem}" >Bar ${index + 1}</option>`;
               
            });
            document.getElementById('select-ctr').innerHTML = selBar;
       
            var checkedBar = document.querySelectorAll('.progress-bar');
            checkedBar[0].classList.add('active');
          
            // const output = `
           
            // `;
            // document.getElementById('buttons').innerHTML = output;
            // console.log(progressNum);
            
        }

    }
    xhr.send();
    var addToBar;
    var barSelect;
   
}

// document.getElementById('bar-1').focus(); 
barSelect = (value) => {
    var el = document.querySelectorAll('.progress-bar');
   
    console.log(el);
    el.forEach(function(elem) {
        if (elem.classList.contains('active')) {
           elem.classList.remove('active');
          } 
              document.getElementById(value).classList.add('active');
         
    });

}


 addToBar = (params, limit ) => {
    //  document.querySelector('.active').style.width = + params +'%' ;.
    let barWidth = document.querySelector('.active').textContent;
    barWidth = parseInt(barWidth);
   
    if (barWidth >= 0) {
        barWidth += params;
        document.querySelector('.active').textContent = barWidth;
        document.querySelector('.active').style.width = barWidth/limit*100 + '%';
        }
        if (barWidth < 0) {
            document.querySelector('.active').textContent = 0;
        }
        if (barWidth > limit) {
            document.querySelector('.active').classList.remove('bg-info');
            document.querySelector('.active').classList.add('bg-danger');
        }
        if (barWidth <= limit) {
            document.querySelector('.active').classList.remove('bg-danger');
            document.querySelector('.active').classList.add('bg-info');
        }
        if (barWidth <= 0) {
            document.querySelector('.active').style.width = 5+'%';
            
        }

    

    console.log(limit);
    
    console.log(params);
    
}
