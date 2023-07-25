
function getCoffee() {
    const selectElement = document.getElementById('chooseCoffee');
    const chooseCoffee = selectElement.value;

    function Coffee(nome, endereco, propriedade) {
        this.nome = nome;
        this.endereco = endereco;
        this.propriedade = propriedade;
    }

    const cafe1 = new Coffee("Crio Café", "Av Santos, 302", "Bom coado no melhor custo beneficio");
    const cafe2 = new Coffee("HM Food", "Benedito Calixto, 139", "Servem almoço executivo durante a semana");
    const cafe3 = new Coffee("King of the fork", "Arthur de Azevedo, 29", "Melhores expressos e café com leite");
    const cafe4 = [(cafe1), " ---- ", (cafe2), " ---- ", (cafe3)];


    let resultCoffee;
        if (chooseCoffee === 'cafe1') {
            resultCoffee = (cafe1);
        }
        else if (chooseCoffee === 'cafe2') {
            resultCoffee = (cafe2);
        }
        else if (chooseCoffee === 'cafe3') {
            resultCoffee = (cafe3);
        }
        else if (chooseCoffee === 'cafe4') {
            resultCoffee = (cafe4);
        }


    alert(JSON.stringify(resultCoffee));
  }
