#!/usr/bin/python3
def safe_print_list(my_list=[], x=0):
    s = 0
    for s in range(x):
        try:
            print(my_list[m], end="")
            s += 1
        except IndexError:
            break
    print()
    return n