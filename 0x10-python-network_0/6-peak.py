#!/usr/bin/python3
"""a function that finds a peak in a list of unsorted integers"""


def find_peak(list_of_integers):
    """ Finds the peak in a list of integers """
    if list_of_integers == []:
        return None

    length = len(list_of_integers)
    l = int(length / 2)
    li = list_of_integers

    if l - 1 < 0 and l + 1 >= length:
        return li[l]
    elif l - 1 < 0:
        return li[l] if li[l] > li[l + 1] else li[l + 1]
    elif l + 1 >= length:
        return li[l] if li[l] > li[l - 1] else li[l - 1]

    if li[l - 1] < li[l] > li[l + 1]:
        return li[l]

    if li[l + 1] > li[l - 1]:
        return find_peak(li[l:])
    return find_peak(li[:l])
