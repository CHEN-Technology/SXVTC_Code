# 示例一
print("\n示例一：\n")

a = input('input:')
print(a)
print(type(a))
b = input('input:')
print(b)
print(type(b))
a = int(a)
print(type(a))
a = float(a)
print(type(a))

print("----------------\n")

# 示例二
print("\n示例二：\n")

a, b, c = 123, 34.1234, 'Hello Python'
print(a, b, c, sep='    ', end='\n')

print("----------------\n")

# 示例三
print("\n示例三：\n")

print('%d\n%u\n%o\n%x' % (12, 12, 12, 12))
print("%c\n%s\n%d" % ('a', 'abc', 12))
print('%f, %e, %g' % (1234.56789, 1234.56789, 12345.6789))
print('%f, %e, %g' % (1234.56789, 1234.56789, 1234567.89))
print('%-10.2f%-10.3f%10.1f' % (1234.56789, 1234.56789, 1234567.89))

print("----------------\n")

# 示例四
print("\n示例四：\n")

print("{} {}".format("I love", "Python"))  # 不设置指定位置，按默认顺序
print("{0} {1}".format("I love", "Python"))  # 设置指定位置
print("{1} {0} {1}".format("Python", "I love"))  # 设置指定位置
print("姓名：{name}，年龄：{age}".format(name="Tom", age="21"))  # 可以设置参数
print("姓名：{name}，年龄：{age}，性别：{gender}".format(
    gender='male', name="Tom", age="21"))  # 设置参数后可以忽略顺序

print("----------------\n")
