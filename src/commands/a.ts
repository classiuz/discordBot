import Command from "../structures/Command"
import questions from "../data/questions.json"

export = new Command({
    name: 'a',
    description: 'Realiza una pregunta',
    permissions: ['Everyone'],

    async run(message, args, client) {
        questions.forEach((arr, idx) => arr.id = idx);
        const questionsId: number[] = []
        args.forEach(arg => {
            const matchFound = questions.find(arr => arr.keys.find(key => key.toLowerCase() == arg.toLowerCase()))
            if (matchFound) questionsId.push(matchFound.id)
        })
        
        if (questionsId.length == 0) return message.reply('Lo siento no te entendí. Trata de ser un poco más específico y utilizar palabras claves como: "ID 121", "Sucursales RapiPago".')
        const responseId = questionsId.sort((a, b) => questionsId.filter(v => v == a).length - questionsId.filter(v => v == b).length).pop()
        const result = questions.find(arr => arr.id == responseId)

        message.reply(result?.response.body!)
    }
})