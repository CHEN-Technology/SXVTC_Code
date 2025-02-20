# 示例一
print("\n示例一：\n")

n = int(input("请输入一个整数：\n"))
if n % 2 != 0:
    print("%d为奇数" % n)

print("----------------\n")

# 示例二
print("\n示例二：\n")

n = int(input("请输入一个整数：\n"))
if n % 2:
    print("%d为奇数" % n)
else:
    print("%d为偶数" % n)

print("----------------\n")

# 示例三
print("\n示例三：\n")

score = int(input("请输入分数：\n"))
grade = ""

if score < 0:
    grade = "error"
elif score < 60:
    grade = "fail"
elif score < 70:
    grade = "pass"
elif score < 80:
    grade = "middle"
elif score < 90:
    grade = "good"
elif score <= 100:
    grade = "excellent"
else:
    grade = "error"
print(grade)

print("----------------\n")
