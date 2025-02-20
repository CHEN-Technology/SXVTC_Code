# 示例一
import module_07 as bank

print("\n示例一：\n")

acc1 = bank.account("Tom", "123-4567", 1000)
bank.deposit(acc1, 500)
print(bank.describe(acc1))
bank.withdraw(acc1, 100)
print(bank.describe(acc1))

print("----------------\n")

# 示例二
print("\n示例二：\n")

x = 10  # 全局作用域：x


def outer():
    y = 20  # 相对outer函数为局部作用域，相对inner函数为外包作用域：y

    def inner():
        z = 30  # 局部作用域：z
        print("inner()函数:", end="\t")
        print("x =", x, end="\t")  # 存取全局x
        print("y =", y, end="\t")  # 存取外包y
        print("z =", z)  # 存取局部z

    inner()
    print("outer()函数:", end="\t")
    print("x =", x, end="\t")
    print("y =", y)


if __name__ == '__main__':
    outer()
    print("main()函数:", end="\t")
    print("x =", x)  # 存取全局x

print("----------------\n")
