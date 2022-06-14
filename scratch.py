def add_nums():
    num1 = 10
    num2 = 20
    return num1 + num2

print(add_nums)
print(add_nums())


def add_nums2(num1, num2):
    return num1 + num2


print(add_nums2)
print(add_nums2(15, 30))


add_some_nums = lambda x: x + 1

print(add_some_nums)
print(add_some_nums(10))