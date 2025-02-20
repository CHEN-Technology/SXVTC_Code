# 示例一
print("\n示例一：\n")

n = 1
s = 0
while n <= 100:
    s += n
    n += 1

print("1到100之间的整数之和为：%d" % (s))

print("----------------\n")

# 示例二
print("\n示例二：\n")

n = int(input("请输入一个整数：\n"))
i = 2

while i < n:
    if n % i == 0:
        print("%d 不是素数" % (n))
        break
    i += 1
else:
    print("%d 为素数" % (n))

print("----------------\n")

# 示例三
print("\n示例三：\n")

string = input("请输入一个字符串：\n")
for s in string:
    if s in "0123456789":
        print("字符串string=\"%s\"中，包含数字" % (string))
        break
else:
    print("字符串string=\"%s\"中，不包含数字" % (string))

print("----------------\n")

# 示例四
print("\n示例四：\n")

numbers = [1, 2, 5, 7, 12, 9, 8]
for i in range(len(numbers)):
    numbers[i] = numbers[i] ** 2
    print(numbers[i], end=" ")

print("\n----------------\n")

# 示例五
print("\n示例五：\n")

numbers = [1, 2, 3, 4, 5]  # 创建列表numbers，学生的序号
names = ["Tom", "rose", "Jerry", "Peter"]  # 创建列表names，学生的姓名
genders = ["male", "female", "female", "male"]  # 创建列表genders，学生的姓别

for item in zip(numbers, names, genders):
    print(item)

print("----------------\n")

# 示例六
print("\n示例六：\n")

webSites = {
    '1': 'baidu',
    '2': 'dangdang',
    '3': 'amezon',
    '4': 'google'
}

# 只返回字典的值
for k in webSites:
    print(k)

for item in webSites.items():
    print(item)

'''
dict.keys()函数返回字典所有键的列表；dict.Values()函数返回字典所有值的列表
变量k在webSites.keys()返回的列表中遍历；变量v在webSites.values()返回的列表中遍历：
'''
for k, v in zip(webSites.keys(), webSites.values()):
    print("number:{}\twebSite:{}".format(k, v))

print("----------------\n")

# 示例七
print("\n示例七：\n")

string = input("请输入一个字符串：\n")
number = 0
for s in string:
    if s in "0123456789":
        number += 1
    else:
        pass
print("\'%s\'字符中数字的个数为：%d" % (string, number))

print("----------------\n")

# 示例八
print("\n示例八：\n")

student = {'Tom': 23, 'Rose': 21, 'Peter': 19,
           'Alice': 20, 'Hans': 18}  # 创建字典（姓名:年龄）
number = 0
for k, v in zip(student.keys(), student.values()):
    if v <= 20:
        continue
    print("name:{}\tage:{}".format(k, v))
    number += 1
else:
    print("年龄大于20岁的学生人数为：{}".format(number))

print("----------------\n")
