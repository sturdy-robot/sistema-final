import json

class GenerateJSON:

    def __init__(self):
        self.dicionario = []

    def atribui_valores(self, nome, itemid, tecnicas, gestor, modelo, problema, tipo, vantagem, desvantagem):
        self.dicionario.append({
            "nome": nome,
            "itemid": itemid,
            "tecnicas": tecnicas,
            "gestor": gestor,
            "modelo": modelo,
            "problema": problema,
            "tipo": tipo,
            "vantagem": vantagem,
            "desvantagem": desvantagem,
            "rating": 0
        })

    def cria_json(self):
        data = self.dicionario
        with open('data.json', 'w') as outfile:
            json.dump(data, outfile)


criarJson = GenerateJSON()
with open("input.txt", "r") as fp:
    for i in range(52):
        nome = fp.readline()
        itemid = i
        tecnicas = fp.readline()
        gestor = fp.readline()
        modelo = fp.readline()
        problema = fp.readline()
        tipo = fp.readline()
        vantagem = fp.readline()
        desvantagem = fp.readline()
        criarJson.atribui_valores(nome, itemid, tecnicas, gestor, modelo, problema, tipo, vantagem, desvantagem)

criarJson.cria_json()