# 示例一
print("\n示例一：\n")


def fact(n):
    if n == 1:
        return 1
    else:
        return n * fact(n-1)


if __name__ == '__main__':
    n = int(input("请输入一个正整数：\n"))
    f = fact(n)
    print("{}的阶乘为：{}".format(n, f))

print("----------------\n")

# 示例二
print("\n示例二：\n")


def selectSort(numbers):
    def findMin():
        min = i
        for j in range(i, len(numbers)):
            if numbers[j] < numbers[min]:
                min = j
        return min

    for i in range(len(numbers)):
        selected = findMin()
        if i != selected:
            numbers[i], numbers[selected] = numbers[selected], numbers[i]


if __name__ == '__main__':
    numbers = [45, 6, 2, 64, 6, 9, 1]
    print("未排序列表元素：{}".format(numbers))
    selectSort(numbers)
    print("排序后列表元素：{}".format(numbers))


print("----------------\n")
