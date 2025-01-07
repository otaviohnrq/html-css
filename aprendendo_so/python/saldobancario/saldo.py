entrada = input('Olá, seja bem-vindo(a) ao nosso serviço do Banco Pythonista! Como podemos ajudar?\n 1 - Criar conta bancária.\n 2 - Calcular saldo de conta.\n 3 - Sair\n ')

if entrada == "1":
    name = input('Qual o nome do responsável pela conta? ')
    dpst = input(f'{name}, você deseja depositar algum valor na sua conta? (S/N) ')
    if dpst == "S" or "s":
        vlrdpst = input('Qual será o valor do depósito? ')
    elif dpst == "N" or "n":
        ...
    