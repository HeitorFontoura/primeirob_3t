let tabuada = 111;

function escreva(){
document.write(" Tabuada do " + tabuada + "<br>");
document.write(tabuada + " X 1 = " + (tabuada*1) + "<br>");
document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>");
document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>");
document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>");
document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>");
document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>");
document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>");
document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>");
document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>");
document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>");
document.write(tabuada + " X 11 = " + (tabuada*11) + "<br>");
document.write(tabuada + " x 12 = " + (tabuada*12) + "<br>");
document.write(tabuada + " x 13 = " + (tabuada*13) + "<br>");
document.write(tabuada + " x 14 = " + (tabuada*14) + "<br>");
document.write(tabuada + " x 15 = " + (tabuada*15) + "<br>");
document.write(tabuada + " x 16 = " + (tabuada*16) + "<br>");
document.write(tabuada + " x 17 = " + (tabuada*17) + "<br>");
document.write(tabuada + " x 18 = " + (tabuada*18) + "<br>");
document.write(tabuada + " x 19 = " + (tabuada*19) + "<br>");
document.write(tabuada + " x 20 = " + (tabuada*20) + "<br>");
}

let lista = ["gilzinho","spessato","neuza","jesus","Duarte"];

function mostraLista(){
    document.write("tamanho da lista: "  +  lista.length + "<br>");
    for(let i = 0; i <lista.length; i++){
        document.write("professores: " + lista[i] + "<br>")
    }
}

function multiplica (){
      for(let i = 1; i <= 10; i++){
      document.write("Taboada do = " + i + "<br>");
      for(let j = 1; j <=10; j++){
        document.write(i + " x"+j+ " = " + (i*j) + "<br>");

      }
      document.write("<br>")
  }
}
function total(){
  let v = document.getElementById("valor").value;
  let j = document.getElementById("juros").value;
  let t = document.getElementById("meses").value;
  let r = 0;
  for(let i=1; i <= t; i++){
     r = v * (1+(j/100));
     document.write("Mês " +i + " valor: R$ "  + r + "<br>");
     v = r;
  }

  document.write("resultado: " + r);
}
function media(){
 let n1 = document.getElementById("n1").value;
 let n2 = document.getElementById("n2").value;
 let n3 = document.getElementById("n3").value;
 let n4 = document.getElementById("n4").value;

 let r = (Number(n1)+Number(n2)+Number(n3)+Number(n4))/4;
 document.getElementById("result").innerHTML = "M edia: " + r;

}
function soma(){
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let n3 = document.getElementById("n3").value;
  let n4 = document.getElementById("n4").value;

  let r = (Number(n1)+Number(n2)+Number(n3)+Number(n4));
   document.getElementById("result").innerHTML = "Soma: " + r;
}
