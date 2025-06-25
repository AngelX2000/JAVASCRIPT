'''
if
elif
else
'''

#Python es IDENTADO
x=2
if x==2:
    print("cumple")

    if x==3:
        print("primera salida")
    elif x=="2":
        print("segunda salida")
    elif x==2:
        print("tercera salida")
    else:
        print("no encontrado")


#OPERADORES LOGICOS
#or and 

if(100>10 and 10==10):
    print("doble condicion ok")

if(100>10000 or 10==10):
    print("condicion 0 ok")

if True:
    print("siempre es verdadero")
