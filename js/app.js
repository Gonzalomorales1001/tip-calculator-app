let bill=document.querySelector('#bill')
let numberPeople=document.querySelector('#people')
let buttonsValue=document.querySelectorAll('.section__button')
let custom=document.querySelector('#custom-value')
let resetButton=document.querySelector('.section__button--reset')

let tipAmount=document.querySelector('#tip-amount')
let totalAmount=document.querySelector('#total')

let billValue=0
let numberPeopleValue=0
let customValue=0

const verify=(value)=>{

    billValue=parseFloat(bill.value)
    numberPeopleValue=parseFloat(numberPeople.value)
    customValue=parseFloat(custom.value)

    let cantBeZero=document.querySelectorAll('.zero')
    
    if(!billValue){
        bill.style.outline='3px solid #F77'
        cantBeZero[0].style.display='inline-block'
        if(numberPeopleValue){
            numberPeople.style.outline='0px solid'
            cantBeZero[1].style.display='none'
        }
    }else if(!numberPeopleValue){
        numberPeople.style.outline='3px solid #F77'
        cantBeZero[1].style.display='inline-block'
        if(billValue){
            bill.style.outline='0px solid'
            cantBeZero[0].style.display='none'
        }
    }
    else if(billValue||numberPeopleValue){
        numberPeople.style.outline='0px solid'
        bill.style.outline='0px solid'
        cantBeZero.forEach(small=>small.style.display='none')
        if(customValue){
            return calculate(customValue)
        }
        return calculate(value)
    }else{
        return calculate(value)
    }
}

const calculate=(value)=>{
    parseFloat(value)

    if(!isNaN(value)){
        let percentage=value/100

        let tipAmountValue= billValue*percentage/numberPeopleValue
        let totalAmountValue= billValue/numberPeopleValue+tipAmountValue
        
        tipAmount.innerHTML=tipAmountValue.toFixed(2)
        totalAmount.innerHTML=totalAmountValue.toFixed(2)
        resetButton.removeAttribute('disabled')
    }else{

    }
}

//Tip Amount /Person= Bill*(15/100)/persons
//Total /Person=  Bill/persons + Tip Amount /Person

const reset=()=>{
    resetButton.setAttribute('disabled','')
    bill.value=''
    custom.value=''
    numberPeople.value=''
    tipAmount.innerHTML='0.00'
    totalAmount.innerHTML='0.00'
}