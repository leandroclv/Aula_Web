def quick_sort(lista):
    if len(lista) <= 1:
        return lista

    pivo = lista[-1]
    menores = []
    maiores = []

    for elemento in lista[:-1]:
        if elemento <= pivo:
            menores.append(elemento)
        else:
            maiores.append(elemento)

    return quick_sort(menores) + [pivo] + quick_sort(maiores)
