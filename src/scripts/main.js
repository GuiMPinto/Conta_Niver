AOS.init();

const dataDoEvento = new Date("Feb 28, 2025 14:00:00")//cria uma data no futuro
const timeStampDoEvento = dataDoEvento.getTime()//armazena um numero que que é gerado
                                                //referente ao presente momento 

const tempoContado = setInterval (function() //atualiza a cada 1 segundo
{
    const agora = new Date()//armazena a data atual
    const timeStampAtual = agora.getTime()//armazena o numero único do presente

    const difeEventoAtual = timeStampDoEvento - timeStampAtual 
    // const difeEventoAtual = timeStampAtual - timeStampDoEvento
    //-- Dia -- //
    const diaParaEvento = Math.floor(difeEventoAtual/ (1000*60*60*24))
    //-- Hora -- //
    const horaParaEvento = Math.floor((difeEventoAtual % (1000*60*60*24))/(1000*60*60))
    //-- Minutos -- //
    const minParaEvento = Math.floor((difeEventoAtual % (1000*60*60))/(1000*60))
    //-- Segundos -- //
    const segParaEvento = Math.floor((difeEventoAtual % (1000*60))/(1000))

    document.getElementById('contador').innerHTML =`${diaParaEvento} Dias  ${horaParaEvento} Horas
                                                        ${minParaEvento} Minutos   ${segParaEvento} Segundos`
    if(difeEventoAtual < 0)
    {
        clearInterval(tempoContado)
        document.getElementById('contador').innerHTML ='------ JÁ ACABOU ------' 
    }
},1000)//determina o 1 segundo