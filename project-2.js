const form = document.querySelector('form');

form.addEventListener('submit',function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height == ''|| height < 0 || isNaN(height)){
        result.innerHTML = `Please give correct height`;
    }
    else if(weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'Please give correct weight'
    }
    else{
        const bmi = (weight * 10000 / (height * height)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;

        const guide = document.querySelector('#guide')
        if(bmi < 18.6){
            guide.innerHTML = `You are underweight`
        }
        else if(bmi > 24.9){
            guide.innerHTML = `You are overweight`
        }
        else if(18.6<=bmi<=24.9){
            guide.innerHTML = `You are fit`
        }
    }
});