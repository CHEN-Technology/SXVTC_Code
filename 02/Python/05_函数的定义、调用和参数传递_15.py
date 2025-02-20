# 示例一
print("\n示例一：\n")


def func_immutable(aXC):
    aXC = 10


aSC = 4
func_immutable(aSC)
print(aSC)

print("----------------\n")

# 示例二
print("\n示例二：\n")


def func_immutable(aXC, index):
    aXC[index] = 10


aSC = [1, 2, 3, 4, 5]
func_immutable(aSC, 3)
print(aSC)

print("----------------\n")

# 示例三
print("\n示例三：\n")


def func5(a, b):
    c = a+b
    return c


# func5(6)


print("----------------\n")

# 示例四
print("\n示例四：\n")


def printinfo(name, age):
    print("名字：", name)
    print("年龄：", age)
    return


printinfo(age=50, name="tom")


print("----------------\n")

# 示例五
print("\n示例五：\n")


def printinfo(name, age=23):
    print("名字：", name)
    print("年龄：", age)
    return


printinfo(name="tom")
printinfo(age=50, name="tom")

print("----------------\n")

# 示例六
print("\n示例六：\n")


def f_3(name, *hobby):
    print('name:{0}'.format(name))
    print('hobby:{0}'.format(hobby))


f_3('tom', 'swimming', 'reading', 'game')
f_3('tom', 'swimming', 'reading', 'game', 'skking')


print("----------------\n")
