def account(name, number, blance):
    # 返回账户信息的字典
    return {'name': name, 'number': number, 'blance': blance}


def deposit(acc, amount):
    # 存款
    if amount <= 0:
        print('存款金额不能为负数')
    else:
        acc['blance'] += amount


def withdraw(acc, amount):
    # 取款
    if amount > acc['blance']:
        print('余额不足')
    else:
        acc['blance'] -= amount


def describe(acc):
    # 返回账户信息字典所对应的字符串
    return "AccountImformation: "+str(acc)
