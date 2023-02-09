let bill=document.querySelector('#bill')
let numberPeople=document.querySelector('#people')
let btnTip=document.querySelectorAll('.btn-tip')
let custom=document.querySelector('#custom-value')
let resetButton=document.querySelector('.section__button--reset')

let tipAmount=document.querySelector('#tip-amount')
let totalAmount=document.querySelector('#total')

let billValue=0
let numberPeopleValue=0
let customValue=0

let btnTipArray=Array.apply(0,btnTip)

const verify=(value)=>{

    billValue=parseFloat(bill.value)
    numberPeopleValue=parseFloat(numberPeople.value)
    customValue=parseFloat(custom.value)

    let cantBeZero=document.querySelectorAll('.zero')
    
    changeStatus()

    if(!billValue){
        bill.style.outline='3px solid #F77'
        cantBeZero[0].style.display='inline-block'
        removeBtnEvent()
        if(numberPeopleValue){
            numberPeople.style.outline='0px solid'
            cantBeZero[1].style.display='none'
        }
    }else if(!numberPeopleValue){
        numberPeople.style.outline='3px solid #F77'
        cantBeZero[1].style.display='inline-block'
        removeBtnEvent()
        if(billValue){
            bill.style.outline='0px solid'
            cantBeZero[0].style.display='none'
        }
    }
    else if(billValue||numberPeopleValue){
        numberPeople.style.outline='0px solid'
        bill.style.outline='0px solid'
        cantBeZero.forEach(small=>small.style.display='none')

        addBtnEvent()

        if(customValue){
            changeStatus()
            // removeBtnEvent()
            calculate(customValue)
        }
        return calculate(value)
    }else{
        return calculate(value)
    }
}

function addBtnEvent(){
    btnTip.forEach(btn=>{
        btn.addEventListener('click', changeStatus)
    })
}

function removeBtnEvent(){
    btnTip.forEach(btn=>{
        btn.removeEventListener('click', changeStatus)
    })
}

function changeStatus(e){
    btnTip.forEach(btn=>{
        btn.classList.remove('section__button--active')
    })

    e&&e.target.classList.add('section__button--active')
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
    changeStatus()
}