const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda', 'joao', 'carlos', 'marcelo'];
const tamanhoDoGrupo = 4;

function grupos(nome, numero) {
    let cont = 1;
    let i = 0;
    if (nome.length <= numero) {
        console.log(`Grupo: ${nome.slice(0, numero)}`);
    } else if (nome.length > numero) {
        console.log(`Grupo ${cont}: ${nome.slice(0, numero)}`);
        while (nome.length !== 0) {
            i = (nome.length - numero);
            while (nome.length !== i && nome.length > 0) {
                nome.shift();
            }
            cont++;
            if (nome.length !== 0) {

                console.log(`Grupo ${cont}: ${nome.slice(0, numero)}`);
            }

        }
    }

}
grupos(nomes, 6);