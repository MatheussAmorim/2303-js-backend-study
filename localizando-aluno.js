const alunos = ['João', 'Juliana', 'Ana', 'Caio']
const medias = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, medias]

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){ // verifica se o nome está na lista
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) // pega o indice do array
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Ana"))