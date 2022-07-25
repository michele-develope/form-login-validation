const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");


form.onsubmit = (e) => {
  e.preventDefault(); 

  // Impedindo o envio do formulário
  // Se o email e a senha estiverem em branco, adicione a classe shake nele, caso contrário, chame a função especificada
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(() => { 
    // Remover a classe de shake depois 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 
  500);
  eInput.onkeyup = () => {
    checkEmail();
  } 

  // Chamando a função checkEmail no keyup de entrada de e-mail
  pInput.onkeyup = () => { 
    checkPass();
  } 
  
  // Chamando a função checkPassword no keyup de entrada de passagem
  function checkEmail () { 

    // Função checkEmail
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 

    // Padrão para validar e-mail
    if (!eInput.value.match(pattern)) { 

      // Se o padrão não corresponder, adicione erro e remova a classe válida
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");

      // Se o valor do email não estiver vazio então mostre por favor insira um email válido caso contrário mostre O email não pode ficar em branco
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }
    else
    { 
      // Se o padrão corresponder, remova o erro e adicione uma classe válida
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass () { 

    // Função checkPass
    if(pInput.value == "")
    { 
      // Se a passagem estiver vazia, adicione erro e remova a classe válida
      pField.classList.add("error");
      pField.classList.remove("valid");
    }
    else
    { 
      // Se a passagem estiver vazia, remova o erro e adicione uma classe válida
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  // Se eField e pField não contiverem a classe de erro, isso significa que os detalhes preenchidos pelo usuário corretamente
  if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
    
    // Redirecionando o usuário para o URL especificado que está dentro do atributo action da tag do formulário
    window.location.href = form.getAttribute("action"); 
  }
}