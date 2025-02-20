def convert(score):
    # 将百分制转换为
    level = score//10
    d = {
        10: lambda: print("{}--A".format(score)),
        9: lambda: print("{}--A".format(score)),
        8: lambda: print("{}--B".format(score)),
        7: lambda: print("{}--C".format(score)),
        6: lambda: print("{}--D".format(score)),
    }
    d.get(level, lambda: print("{}--E".format(score)))()


if __name__ == '__main__':
    convert(56)
    convert(90)
    convert(88)
    convert(100)
    convert(70)
    convert(62)
